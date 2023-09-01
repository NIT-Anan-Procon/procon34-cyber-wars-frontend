import { server } from "@/mocks/server";
import { SignInForm } from "../SignInForm"
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

beforeAll(() => server.listen());
  
afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());
  
describe('ユーザ認証関連のAPIテスト',() => {
  test('ログイン成功時のテスト', async() => {
    const onSuccess = jest.fn();

    render(<SignInForm onSuccess={onSuccess}/>)

    userEvent.click(screen.getByRole('button', { name: /log in/i }));
  }),
  test('ログイン失敗のテスト'), async() => {

  }
});