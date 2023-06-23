import { useNavbar } from "../../shared/store/store";
import { NavLink } from "react-router-dom";
import c from './navbar.module.css'

export const NavbarDropDown = () => {
    const menuLinks = useNavbar((state) => state.menuLinks);
    return (
        <div className={c.navbar}>
            <div className={c.navbar_container}>
                {menuLinks.map((link) => (
                    <h1 className={c.item} key={link.id}><NavLink 
                        to={link.href}
                        className={({ isActive, isPending }) =>
                            isActive
                                ? c.link_active
                                : isPending
                                    ? c.link
                                    : c.link
                        }
                    >
                        {link.text}
                    </NavLink></h1>
                ))}
            </div>
        </div>
    )
}