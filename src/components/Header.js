import '../styles/style.css';

import { HeaderName } from '../components/HeaderName.js';
import { HeaderPic } from '../components/HeaderPic.js';
import { HeaderSocial } from '../components/HeaderSocial.js';

export const Header = () => {
    return (
        <div>
            <HeaderPic />
            <br />
            <HeaderName />
            <br />
            <HeaderSocial />
            <p class="names"><b>Ph:</b> +91-9491449661, <b>Mail-id:</b> harishhasti95@gmail.com</p>
            <hr />
            <br />
            <br />
        </div>
    );
}