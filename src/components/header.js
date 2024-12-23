import Image from 'next/image';
import styles from './header.module.css';
import iconBravo from '@/../public/icon-bravo.svg';
import Nav from './nav';
import UserButton from './userButton';
import Link from 'next/link';

export default function Header() {
  return (
    <div className={styles.header}>
        <div className={`container container_flex`}>
            <div className={styles.brand_nav}>
                <div className={styles.brand}>
                  <Link href="/">
                    <Image src={iconBravo} alt='Bravo' />
                  </Link>
                </div>
                <div>
                  <Nav />
                </div>
            </div>
            <div className={styles.account}>
              <UserButton />
              <Link href="/garagem/favoritos" className={styles.favorite}>
                <svg fill='#fff'>
                  <path d="M8.028 6.00475C7.865 6.00475 7.705 6.01775 7.549 6.04175C6.317 6.23575 5 7.21575 5 9.38475C5 13.4097 10.272 17.1217 12 18.2297C13.728 17.1217 19 13.4097 19 9.38475C19 7.21575 17.682 6.23575 16.45 6.04175C15.174 5.84175 13.533 6.44475 12.951 8.24575C12.818 8.65875 12.434 8.93875 12 8.93875C11.566 8.93875 11.181 8.65875 11.048 8.24575C10.537 6.66375 9.209 6.00475 8.028 6.00475ZM12.194 20.2887H11.805C11.621 20.2887 11.44 20.2367 11.282 20.1407C9.339 18.9467 3 14.6447 3 9.38475C3 6.17175 5.129 4.39875 7.239 4.06675C9.109 3.77275 10.874 4.47975 12 5.86375C13.126 4.48075 14.889 3.76975 16.76 4.06675C18.871 4.39875 21 6.17175 21 9.38475C21 14.6447 14.66 18.9467 12.717 20.1407C12.56 20.2367 12.379 20.2887 12.194 20.2887Z"></path>
                </svg>
              </Link>
            </div>
        </div>
    </div>
  );
}