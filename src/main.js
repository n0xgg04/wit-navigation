import Navigo from 'navigo';
import renderHome, {renderLta2} from "./js/home.js";
import {renderLta} from "./js/home.js";

const router = new Navigo('/'); //tạo

//thiết lập

router.on('/', function () {
    renderHome()
});

router.on('/lta', function () {
    renderLta()
});

router.on('/lta2', function () {
    renderLta2()
});

//bắt đầu nghe
router.resolve();

export {router}
