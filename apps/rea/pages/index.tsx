import { GetStaticPropsContext } from 'next';
import styles from './index.module.css';
// TO DO : fix nx export not being found using @
import {
  Logo,
  TopNavLink,
  TopNavLinkProps,
  TopNavLinks,
  TopNavLinksProps,
  HeartIcon,
  UserIcon
} from '../../../libs/common-ui/src/lib';
import { dataTopNavLinks } from '../mocks';

export interface IndexProps {
  dataTopNavLinks: TopNavLinksProps;
}

export function Index({ dataTopNavLinks }: IndexProps) {
  console.log(dataTopNavLinks);
  return (
    <div className={styles.page}>
      <Logo linkTo="/" />
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <TopNavLinks links={dataTopNavLinks.links} />
            <UserIcon className='w-[32px] hover:stroke-slate-500 hover:fill-black bg-blend-color-burn hover:cursor-pointer ' />
          </div>

          <p id="love">
            Carefully crafted with
            <HeartIcon className='w-[32px]  hover:stroke-slate-500 hover:fill-black' />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Index;

export async function getServerSideProps(context: GetStaticPropsContext) {
  return {
    props: {
      dataTopNavLinks,
    },
  };
}
