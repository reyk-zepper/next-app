import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link href="/" className="nav-link">
            home
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/products" className="nav-link">
            products
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/products/mac" className="nav-link">
            APPLE
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/products/personal-computer" className="nav-link">
            PC
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/cars/[[...params]]" className="nav-link">
            cars
          </Link>
        </li>
      </ul>
    </div>
  );
}
