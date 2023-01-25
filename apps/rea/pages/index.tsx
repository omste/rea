import { GetStaticPropsContext } from 'next';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
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
            <div onClick={() => setShowModal(true)}>
              <UserIcon className="w-[32px] hover:stroke-slate-500 hover:fill-black hover:cursor-pointer " />
            </div>
          </div>

          <p id="love">
            Carefully crafted with
            <HeartIcon className="w-[32px]  hover:stroke-red-200 hover:fill-red-800 hover:cursor-pointer" />
          </p>
        </div>
      </div>
      {/* <button
        className="px-4 py-2 text-purple-100 bg-purple-600 rounded-md"
        type="button"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Open Modal
      </button> */}
      <>
        <Transition
          show={showModal}
          // enter="ease-out duration-300"
          // enterFrom="opacity-0 scale-95"
          // enterTo="opacity-100 scale-100"
          // leave="ease-in duration-200"
          // leaveFrom="opacity-100 scale-100"
          // leaveTo="opacity-0 scale-95"
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        ><Modal setOpenModal={setShowModal} /></Transition>
      </>
      {/* {showModal && <Modal setOpenModal={setShowModal} />} */}
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
