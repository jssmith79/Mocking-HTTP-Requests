
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('when interacting with the github API', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    it('receives github name from the rest API', async() => {
        fetch.mockResponseOnce(JSON.stringify({ name: 'coder'}));
        render(<App/>);
        const githubName =  await waitFor(() => {
            return screen.getByRole('heading', {level: 2 })
        })
        expect(githubName).toHaveTextContent('coder');
    });


    test('it receives the github URL for user', async () => {
        fetch.mockResponseOnce(JSON.stringify({  html_url: 'http;//github.com/learningToCode1234' }));
        render(<App/>);
        const githubUrl = await waitFor(() => screen.getByRole('link'));
        expect(githubUrl).toHaveAttribute('href', expect.stringContaining('github.com'))
    })
});

