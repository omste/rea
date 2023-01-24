import { GetStaticPropsContext } from 'next';
import styles from './index.module.css';
// TO DO : fix nx export not being found using @
import {
  Logo,
  TopNavLink,
  TopNavLinkProps
} from '../../../libs/common-ui/src/lib';
import { dataTopNavLinks } from '../mocks';


export interface IndexProps {
  dataTopNavLinks: TopNavLinkProps[]
}

export function Index({dataTopNavLinks} : IndexProps) {
  console.log(dataTopNavLinks);
  return (
    <div className={styles.page}>
      <Logo linkTo="/" />
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            {dataTopNavLinks.map((link, idx) => {
            return (
              <TopNavLink text={link.text} linkTo={link.linkTo} key={idx} />
            )  
          })
            }  
          </div>

          <p id="love">
            Carefully crafted with
            <svg
              fill="currentColor"
              stroke="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
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
      dataTopNavLinks
    },
  };
}