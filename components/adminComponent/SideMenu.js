import {
  MenuAlt1Icon,
  ChartBarIcon,
  ShoppingBagIcon,
  CubeIcon,
  UserGroupIcon,MapPinIcon,
  ClipboardIcon,
  BriefcaseIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  {
    name: 'Dashboard',
    icon: ChartBarIcon,
    href: '/admin/dashboard',
    current: true,
  },
  {
    name: 'Orders',
    icon: ShoppingBagIcon,
    href: '/admin/orders',
    current: false,
  },
  { name: 'Items', icon: CubeIcon, href: '/admin/items', current: false },
  { name: 'Users', icon: UserGroupIcon, href: '/admin/users', current: false },
  {
    name: 'Articles',
    icon: ClipboardIcon,
    href: '/admin/articles',
    current: false,
  },
  {
    name: 'Partners',
    icon: BriefcaseIcon,
    href: '/admin/partners',
    current: false,
  },
  {
    name: 'Encyclopedia',
    icon: BookOpenIcon,
    href: '/admin/dogs',
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example({ step }) {
  return (
    <div className="flex min-h-0 flex-1 flex-col bg-green-600 rounded-xl p-12 m-12">
      <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
        <nav className="mt-5 flex-1 space-y-1 px-2" aria-label="Sidebar">
          {navigation.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                index == step
                  ? 'bg-green-800 text-white'
                  : 'text-green-100 hover:bg-green-300 hover:bg-opacity-75',
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
              )}
            >
              <item.icon
                className="mr-3 h-6 w-6 flex-shrink-0 text-green-300"
                aria-hidden="true"
              />
              <span className="flex-1">{item.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
