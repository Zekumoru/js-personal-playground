import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

interface IApp {
  title: string;
  onChangeTitle?: (oldTitle: string) => string;
}

const App = ({ title, onChangeTitle }: IApp) => {
  const [header, setHeading] = useState(title);
  const handleClick = () => {
    if (typeof onChangeTitle === 'function')
      setHeading((oldTitle) => onChangeTitle(oldTitle));
  };

  return (
    <div>
      <h1>{header}</h1>
      <button onClick={handleClick}>Change title</button>
    </div>
  );
};

describe('App component', () => {
  it('renders headline', () => {
    const { container } = render(<App title="React" />);
    expect(container).toMatchSnapshot();
  });

  it('renders new headline after button click', async () => {
    const user = userEvent.setup();
    render(<App title="React" onChangeTitle={() => 'Vite'} />);

    const button = screen.getByRole('button', { name: 'Change title' });
    await user.click(button);

    expect(screen.getByRole('heading').textContent).toMatch(/Vite/);
  });

  it('should call the onChangeTitle function if it is clicked', async () => {
    const user = userEvent.setup();
    const onChangeTitle = vi.fn();
    render(<App title="React" onChangeTitle={onChangeTitle} />);

    const button = screen.getByRole('button', { name: 'Change title' });
    await user.click(button);

    expect(onChangeTitle).toHaveBeenCalled();
  });

  it('should not call the onChangeTitle function if it is not clicked', () => {
    const onChangeTitle = vi.fn();
    render(<App title="React" onChangeTitle={onChangeTitle} />);

    expect(onChangeTitle).not.toHaveBeenCalled();
  });
});
