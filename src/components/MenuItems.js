export default function MenuItems({ items }) {
    return (
      <nav className="flex gap-8 text-sm font-medium">
        {items.map((item, index) => (
          <li key={index} className="list-none">
            <a href={item.path} className="hover:text-gray-400 transition">
              {item.name}
            </a>
          </li>
        ))}
      </nav>
    );
  }
  