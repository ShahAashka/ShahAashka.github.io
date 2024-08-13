import CustomLink from '../common/CustomLink';
import { HashLink } from 'react-router-hash-link'
import { GithubIcon, LinkedinIcon } from '../icons';

const NavBar = () => {
  return (
    <nav className="h-header sticky top-0 z-50 flex bg-primary-300 border-b-2 border-primary-100 border-solid">
      <div className="container flex w-full justify-between items-center flex-row py-4">
        <HashLink to='#' className="items-center justify-start">
          <img alt="Site Logo" width={36} height={36} src='/android-chrome-512x512.png'/>
        </HashLink>
        <ul className="hidden flex flex-row gap-2 justify-between items-center list-none xs:flex sm:gap-6">
            <CustomLink to='#about' className="text-primary-500 font-medium text-lg decoration-none hover:text-primary-100 hover:underline hover:decoration-solid">About</CustomLink>
            {/* <CustomLink to='#projects' className="text-primary-500 font-medium text-lg decoration-none hover:text-primary-100 hover:underline hover:decoration-solid">Projects</CustomLink> */}
            <CustomLink to='#contact' className="text-primary-500 font-medium text-lg decoration-none hover:text-primary-100 hover:underline hover:decoration-solid">Contact</CustomLink>
        </ul>
        <ul className='flex flex-row gap-2 items-center'>
          <CustomLink to={"https://github.com/ShahAashka"}>
            <GithubIcon className="h-8 w-8 fill-white transition hover:fill-primary-100" />
          </CustomLink>
          <CustomLink to={"https://www.linkedin.com/in/aashka-acharya-83697214b/"}>
            <LinkedinIcon className="h-8 w-8 fill-white transition hover:fill-primary-100" />
          </CustomLink>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar