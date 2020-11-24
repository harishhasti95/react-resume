import '../styles/style.css';
import logo from './temp_file.jpg';


export const HeaderPic = () => {
    return (
        <div class="header">
            <img src={logo} class="self" style={{alignContent: "center"}} alt='' />
        </div>
    );
}
