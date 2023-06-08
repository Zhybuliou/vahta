import Logo from './Logo';
import Menu from './Menu';

export default function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <Logo />
        <Menu />
      </div>
    </div>
  );
}
