/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Link from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { SkipNavContent } from '@reach/skip-nav';
import { NAVIGATION } from '@lib/constants';
import styles from './layout.module.css';
import Logo from '../public/Logo.jpeg';
import MobileMenu from './mobile-menu';
import Footer from './footer';
import React from 'react';
import DemoButton from './hms/demo-cta';
import RoomCta from './hms/demo-cta/room-cta';
import { hmsConfig } from './hms/config';
import ViewSource from './view-source';
import DJPult from '../public/dj-pult.jpg'

type Props = {
  children: React.ReactNode;
  className?: string;
  hideNav?: boolean;
  layoutStyles?: any;
  isLive?: boolean;
};

export default function Layout({
  children,
  className,
  hideNav,
  layoutStyles,
  isLive = false
}: Props) {
  const router = useRouter();
  const activeRoute = router.asPath;
  const disableCta = ['/schedule', '/speakers', '/expo', '/jobs'];
  return (
    <>
      <div className={styles.background}>
        <div style={{ width: '100%', backgroundColor: 'red' }}>
          <div style={{ width: '70%', margin: 'auto', display: 'flex', justifyContent: 'space-between' }}><h3>PRAŽSKÁ TVORBA</h3><h3>PRAŽSKÁ TVORBA</h3><h3>PRAŽSKÁ TVORBA</h3></div>
          <div style={{ width: '100%' }}><h3 style={{ width: 70, margin: 'auto' }}>UVÁDÍ</h3></div>
        </div>
        <div style={{ display: 'flex', height: 230}}>
          <div style={{ width: '100%', marginLeft: '10%', backgroundImage: "url("+ DJPult.src +")", backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'top right', backgroundSize: '500px 350px' }}><img src={Logo.src} style={{ width: 200, display: 'inline' }}></img><div style={{ display: 'inline', verticalAlign: 'top', marginTop: 60 }}><h3 style={{ display: 'inline', marginRight: 10 }}>On Air: Johny Boss - Late night Rave</h3><div style={{ width: 55, height: 55, backgroundColor: 'red', borderRadius: 30, display: 'inline' }}>⫸</div></div></div>
        </div>
        {!hideNav && (
          <header className={cn(styles.header)} style={{ flexWrap: 'wrap', justifyContent: 'space-between', paddingRight: '2%', paddingLeft: '2%' }}>
            <div style={{ marginLeft: 35 }}>Available streams: <button style={{ border: '2px solid white', borderRadius: 10, marginLeft: 20 }}>64 kb MP3</button><button style={{ border: '2px solid white', borderRadius: 10, marginLeft: 20 }}>32 kb MP3</button></div>
            <div className={styles['header-logos']}>
              <MobileMenu key={router.asPath} />
              <Link href="/">
                {/* eslint-disable-next-line */}
                <a className={styles.logo}>
                  {/* Logo />*/}
                </a>
              </Link>
            </div>
            <div className={styles.tabs}>
              {NAVIGATION.map(({ name, route }) => (
                <a
                  key={name}
                  href={route}
                  className={cn(styles.tab, {
                    [styles['tab-active']]: activeRoute.startsWith(route)
                  })}
                >
                  {name}
                </a>
              ))}
            </div>


          </header>
        )}
        <ViewSource />
        <div className={styles.page} style={{ backgroundImage: "url('https://media-cdn.tripadvisor.com/media/photo-s/13/9f/8d/0d/new-photos-of-one-club.jpg')" }}>
          <main className={styles.main} style={layoutStyles}>
            <SkipNavContent />
            <div className={cn(styles.full, className)}>{children}</div>
          </main>
          <h1 style={{ width: '73%', margin: 'auto', marginBottom: 25, fontSize: 45 }}>Novinky</h1>
          <div style={{ width: '73%', margin: 'auto', paddingBottom: 45, display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ height: 270, width: 290, backgroundColor: 'blue' }}>
              <div style={{ width: '100%', height: '54%', padding: '30px 30px 8px 20px' }}></div>
              <div style={{ width: '100%', height: '27%', padding: '16px 30px 10px 20px', lineHeight: 1 }}><div style={{width: '100%', height: '100%', color: 'black'}}><span style={{fontSize:23}}>NOW PLAYING</span>< br/><span>Radio - Podcast</span></div></div>
              <div style={{ width: '100%', height: '19%', padding: '8px 30px 10px 20px', backgroundColor: 'white' }}><div style={{width: '100%', height: '100%', fontSize: 15, color: 'black'}}>READ MORE</div></div>
            </div>
            <div style={{ height: 270, width: 290, backgroundColor: 'blue' }}>
              <div style={{ width: '100%', height: '54%', padding: '30px 30px 8px 20px' }}></div>
              <div style={{ width: '100%', height: '27%', padding: '16px 30px 10px 20px', lineHeight: 1 }}><div style={{width: '100%', height: '100%', color: 'black'}}><span style={{fontSize:23}}>NOW PLAYING</span>< br/><span>Radio - Podcast</span></div></div>
              <div style={{ width: '100%', height: '19%', padding: '8px 30px 10px 20px', backgroundColor: 'white' }}><div style={{width: '100%', height: '100%', fontSize: 15, color: 'black'}}>READ MORE</div></div>
            </div>
            <div style={{ height: 270, width: 290, backgroundColor: 'blue' }}>
              <div style={{ width: '100%', height: '54%', padding: '30px 30px 8px 20px' }}></div>
              <div style={{ width: '100%', height: '27%', padding: '16px 30px 10px 20px', lineHeight: 1 }}><div style={{width: '100%', height: '100%', color: 'black'}}><span style={{fontSize:23}}>NOW PLAYING</span>< br/><span>Radio - Podcast</span></div></div>
              <div style={{ width: '100%', height: '19%', padding: '8px 30px 10px 20px', backgroundColor: 'white' }}><div style={{width: '100%', height: '100%', fontSize: 15, color: 'black'}}>READ MORE</div></div>
            </div>
            <div style={{ height: 270, width: 290, backgroundColor: 'blue' }}>
              <div style={{ width: '100%', height: '54%', padding: '30px 30px 8px 20px' }}></div>
              <div style={{ width: '100%', height: '27%', padding: '16px 30px 10px 20px', lineHeight: 1 }}><div style={{width: '100%', height: '100%', color: 'black'}}><span style={{fontSize:23}}>NOW PLAYING</span>< br/><span>Radio - Podcast</span></div></div>
              <div style={{ width: '100%', height: '19%', padding: '8px 30px 10px 20px', backgroundColor: 'white' }}><div style={{width: '100%', height: '100%', fontSize: 15, color: 'black'}}>READ MORE</div></div>
            </div>
            </div>
            <div style={{ width: '73%', margin: 'auto', paddingBottom: 45, display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ height: 270, width: 290, backgroundColor: 'blue' }}>
              <div style={{ width: '100%', height: '54%', padding: '30px 30px 8px 20px' }}></div>
              <div style={{ width: '100%', height: '27%', padding: '16px 30px 10px 20px', lineHeight: 1 }}><div style={{width: '100%', height: '100%', color: 'black'}}><span style={{fontSize:23}}>NOW PLAYING</span>< br/><span>Radio - Podcast</span></div></div>
              <div style={{ width: '100%', height: '19%', padding: '8px 30px 10px 20px', backgroundColor: 'white' }}><div style={{width: '100%', height: '100%', fontSize: 15, color: 'black'}}>READ MORE</div></div>
            </div>
            <div style={{ height: 270, width: 290, backgroundColor: 'blue' }}>
              <div style={{ width: '100%', height: '54%', padding: '30px 30px 8px 20px' }}></div>
              <div style={{ width: '100%', height: '27%', padding: '16px 30px 10px 20px', lineHeight: 1 }}><div style={{width: '100%', height: '100%', color: 'black'}}><span style={{fontSize:23}}>NOW PLAYING</span>< br/><span>Radio - Podcast</span></div></div>
              <div style={{ width: '100%', height: '19%', padding: '8px 30px 10px 20px', backgroundColor: 'white' }}><div style={{width: '100%', height: '100%', fontSize: 15, color: 'black'}}>READ MORE</div></div>
            </div>
            <div style={{ height: 270, width: 290, backgroundColor: 'blue' }}>
              <div style={{ width: '100%', height: '54%', padding: '30px 30px 8px 20px' }}></div>
              <div style={{ width: '100%', height: '27%', padding: '16px 30px 10px 20px', lineHeight: 1 }}><div style={{width: '100%', height: '100%', color: 'black'}}><span style={{fontSize:23}}>NOW PLAYING</span>< br/><span>Radio - Podcast</span></div></div>
              <div style={{ width: '100%', height: '19%', padding: '8px 30px 10px 20px', backgroundColor: 'white' }}><div style={{width: '100%', height: '100%', fontSize: 15, color: 'black'}}>READ MORE</div></div>
            </div>
            <div style={{ height: 270, width: 290, backgroundColor: 'blue' }}>
              <div style={{ width: '100%', height: '54%', padding: '30px 30px 8px 20px' }}></div>
              <div style={{ width: '100%', height: '27%', padding: '16px 30px 10px 20px', lineHeight: 1 }}><div style={{width: '100%', height: '100%', color: 'black'}}><span style={{fontSize:23}}>NOW PLAYING</span>< br/><span>Radio - Podcast</span></div></div>
              <div style={{ width: '100%', height: '19%', padding: '8px 30px 10px 20px', backgroundColor: 'white' }}><div style={{width: '100%', height: '100%', fontSize: 15, color: 'black'}}>READ MORE</div></div>
            </div>
            </div>
            <h1 style={{ width: '73%', margin: 'auto', marginBottom: 25, marginTop: '50px', fontSize: 45 }}>Novinky</h1>
            <div style={{ width: '70%', margin: 'auto', marginLeft: '13.5%', paddingBottom: 45, display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ height: 270, width: 270, borderRadius: 140, backgroundColor: 'blue' }}>
              </div>
              <div style={{ height: 270, width: 270, borderRadius: 140, backgroundColor: 'blue' }}>
              </div>
              <div style={{ height: 270, width: 270, borderRadius: 140, backgroundColor: 'blue' }}>
              </div>
              <div style={{ height: 270, width: 270, borderRadius: 140, backgroundColor: 'blue' }}>
              </div>
            </div>
          {!activeRoute.startsWith('/stage') && <Footer />}
        </div>
      </div>
    </>
  );
}
