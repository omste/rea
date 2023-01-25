import { GetStaticPropsContext } from 'next';
import { useState } from 'react';
import styles from './index.module.css';
// TO DO : fix nx export not being found using @
import {
  Logo,
  TopNavLinks,
  TopNavLinksProps,
  HeartIcon,
  UserIcon,
  Modal,
} from '../../../libs/common-ui/src/lib';
import { dataTopNavLinks } from '../mocks';

export interface IndexProps {
  dataTopNavLinks: TopNavLinksProps;
}

export function Index({ dataTopNavLinks }: IndexProps) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.page}>
      <Logo linkTo="/" />
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <TopNavLinks links={dataTopNavLinks.links} />
            <UserIcon className="w-[32px] hover:stroke-slate-500 hover:fill-black hover:cursor-pointer " />
          </div>

          <p id="love">
            Carefully crafted with
            <HeartIcon className="w-[32px]  hover:stroke-red-200 hover:fill-red-800 hover:cursor-pointer" />
          </p>
        </div>
      </div>
      <button
        className="px-4 py-2 text-purple-100 bg-purple-600 rounded-md"
        type="button"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Open Modal
      </button>
      {showModal && <Modal setOpenModal={setShowModal} />}
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
