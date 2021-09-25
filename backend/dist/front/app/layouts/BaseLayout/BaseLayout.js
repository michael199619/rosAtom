"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseLayout_module_sass_1 = require("./BaseLayout.module.sass");
const link_1 = require("next/link");
const image_1 = require("next/image");
const main_svg_1 = require("./icons/main.svg");
const map_svg_1 = require("./icons/map.svg");
const analitycs_svg_1 = require("./icons/analitycs.svg");
const profile_svg_1 = require("./icons/profile.svg");
const questioning_svg_1 = require("./icons/questioning.svg");
const BaseLayout = ({ children, title, className }) => {
    return (<div className={BaseLayout_module_sass_1.default.Wrapper}>
            <div className={BaseLayout_module_sass_1.default.SideBar}>

                <div className={BaseLayout_module_sass_1.default.NavBar}>
                    <div className={BaseLayout_module_sass_1.default.LinkWrapper}>
                        <image_1.default src={main_svg_1.default} alt="" className={BaseLayout_module_sass_1.default.LinkIcon}/>
                        <link_1.default href="/">
                            <a href="" className={BaseLayout_module_sass_1.default.LinkText}>Главная</a>
                        </link_1.default>
                    </div>
                    <div className={BaseLayout_module_sass_1.default.LinkWrapper}>
                        <image_1.default src={analitycs_svg_1.default} alt="" className={BaseLayout_module_sass_1.default.LinkIcon}/>
                        <link_1.default href="/analitycs">
                            <a href="" className={BaseLayout_module_sass_1.default.LinkText}>Аналитика</a>
                        </link_1.default>
                    </div>
                    <div className={BaseLayout_module_sass_1.default.LinkWrapper}>
                        <image_1.default src={map_svg_1.default} alt="" className={BaseLayout_module_sass_1.default.LinkIcon}/>
                        <link_1.default href="/map">
                            <a href="" className={BaseLayout_module_sass_1.default.LinkText}>Карта</a>
                        </link_1.default>
                    </div>
                    <div className={BaseLayout_module_sass_1.default.LinkWrapper}>
                        <image_1.default src={questioning_svg_1.default} alt="" className={BaseLayout_module_sass_1.default.LinkIcon}/>
                        <link_1.default href="/questioning">
                            <a href="" className={BaseLayout_module_sass_1.default.LinkText}>Анкетирование</a>
                        </link_1.default>
                    </div>
                    <div className={BaseLayout_module_sass_1.default.LinkWrapper}>
                        <image_1.default src={profile_svg_1.default} alt="" className={BaseLayout_module_sass_1.default.LinkIcon}/>
                        <link_1.default href="/profile">
                            <a href="" className={BaseLayout_module_sass_1.default.LinkText}>Профиль</a>
                        </link_1.default>
                    </div>
                </div>
                <p className={BaseLayout_module_sass_1.default.Text}>росатом.аналитика — от людей и для людей</p>
            </div>
            <div className={BaseLayout_module_sass_1.default.ContentWrapper}>
                <div className={BaseLayout_module_sass_1.default.ColorBar}/>
                <div className={BaseLayout_module_sass_1.default.ContentSubWrapper}>
                    <header className={`${BaseLayout_module_sass_1.default.Header} ${className}`}>
                        <p className={BaseLayout_module_sass_1.default.HeaderTitle}>{title}</p>
                    </header>
                    <div className={`${BaseLayout_module_sass_1.default.ContentInner} ${className}`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>);
};
exports.default = BaseLayout;
//# sourceMappingURL=BaseLayout.js.map