import { FaMobileAlt } from 'react-icons/fa';
import Button from '../Button';

export default function Menu() {
  return (
    <div className="header-menu">
      <a href="tel:+74951234567">
        <FaMobileAlt />
        8-800-500-50-20
      </a>
      <Button />
    </div>
  );
}
