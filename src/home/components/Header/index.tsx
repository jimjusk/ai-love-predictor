import Logo from './Logo';
import Navigation from './Navigation';
import UserActions from './UserActions';
import LanguageSwitch from '../common/LanguageSwitch';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <Navigation />
          <div className="flex items-center gap-4">
            <LanguageSwitch />
            <UserActions />
          </div>
        </div>
      </div>
    </header>
  );
} 