import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNemes/classNames';
import { Button } from 'shared/ui/Button/Button';
import { TheamSwither } from 'shared/ui/ThemeSwithcher';
import { LangeSwither } from 'widgets/LangeSwither/LangeSwither';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button onClick={onToggle}>{t('toggle')}</Button>
      <div className={cls.switchers}>
        <TheamSwither />
        <LangeSwither />
      </div>
    </div>
  );
};
