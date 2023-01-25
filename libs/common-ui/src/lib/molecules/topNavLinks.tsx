import {
    TopNavLink,
    TopNavLinkProps
  } from '../..//lib';

export interface TopNavLinksProps {
    links: TopNavLinkProps[];
}

  export const TopNavLinks :React.FunctionComponent<TopNavLinksProps> = (props) => {
    return (
        <div className="grid grid-rows-1 grid-cols-4 grid-flow-col gap-4">
            {props.links.map((link, idx) => {
              return (
                <TopNavLink text={link.text} linkTo={link.linkTo} key={idx} />
              );
            })}
        </div>
    )
}
