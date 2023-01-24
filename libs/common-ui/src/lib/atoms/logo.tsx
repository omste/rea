import Image from 'next/image';
import Link from 'next/link'
import logo from '../images/logo.png';

export interface LogoProps {
    linkTo: string
}

export const Logo :React.FunctionComponent<LogoProps> = (props) => {
    return (
        <>
        <Link href={props.linkTo}>
            <Image src={logo} alt="logo" width={100}/>
        </Link>
        </>
    )
}
