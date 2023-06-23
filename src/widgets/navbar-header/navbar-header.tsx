import { useNavbar } from "../../shared/store/store";
import { NavLink } from "react-router-dom";
import c from './navbar.module.css'

export const NavbarHeader = () => {
    const menuLinks = useNavbar((state) => state.menuLinks);
    return (
        <div className={c.navbar}>
            {menuLinks.map((link) => (
                <h1 key={link.id} className={c.item} ><NavLink
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
    )
}