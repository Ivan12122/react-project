import {classNames} from "shared/lib/classNemes/classNames";
import cls from "./Sidebar.module.scss"
import React, {useState} from "react";
import {TheamSwither} from "shared/ui/ThemeSwithcher";
import {LangeSwither} from "widgets/LangeSwither/LangeSwither";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <TheamSwither/>
                <LangeSwither/>
            </div>
        </div>
    );
};