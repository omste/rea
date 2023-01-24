import Link from 'next/link'

export interface TopNavLinkProps {
    text: string;
    linkTo: string;
}

export const TopNavLink :React.FunctionComponent<TopNavLinkProps> = (props) => {
    return (
        <>
        <Link href={props.linkTo}>
            <div className='w-1/4 '>{props.text}</div>
        </Link>
        </>
    )
}
