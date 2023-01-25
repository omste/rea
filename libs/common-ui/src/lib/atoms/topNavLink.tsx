import Link from 'next/link';

export interface TopNavLinkProps {
  text: string;
  linkTo: string;
}

export const TopNavLink: React.FunctionComponent<TopNavLinkProps> = (props) => {
  return (
    <div className=" text-indigo-500 hover:text-indigo-800">
      <Link href={props.linkTo}>{props.text}</Link>
    </div>
  );
};
