import React from 'react';

type ColorVariant = 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger' | 'error' | 'neutral' | 'ghost' | 'outline' | 'gradient' | 'google' | 'github' | 'discord';
type Size = 'sm' | 'md' | 'lg';
interface ComponentProps {
    children?: React.ReactNode;
    className?: string;
}
interface NavItem {
    title: string;
    path: string;
    section: 'comenzando' | 'componentes';
}

declare const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>>;
declare const Validator: React.FC<{
    error?: string;
    success?: string;
    className?: string;
}>;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ColorVariant;
    size?: Size;
    shadow?: boolean;
    icon?: React.ReactNode;
    tooltip?: string;
    shape?: 'rounded' | 'circle';
    loading?: boolean;
    fullWidth?: boolean;
    active?: boolean;
}
declare const Button: React.FC<ButtonProps>;
declare const Link: React.FC<{
    href?: string;
    children: React.ReactNode;
    className?: string;
}>;
declare const Breadcrumbs: React.FC<{
    items: {
        label: string;
        href?: string;
        icon?: React.ReactNode;
    }[];
}>;
declare const Dock: React.FC<{
    children: React.ReactNode;
    className?: string;
}>;
declare const DockItem: React.FC<{
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
}>;
declare const Navbar: React.FC<{
    brand: React.ReactNode;
    children?: React.ReactNode;
    actions?: React.ReactNode;
}>;
declare const Pagination: React.FC<{
    current: number;
    total: number;
    onPageChange: (p: number) => void;
}>;
declare const Steps: React.FC<{
    current: number;
    steps: {
        label: string;
        icon?: React.ReactNode;
    }[];
}>;
declare const Tabs: React.FC<{
    active: string;
    onChange: (id: string) => void;
    tabs: {
        id: string;
        label: string;
        icon?: React.ReactNode;
    }[];
}>;
declare const Dropdown: React.FC<{
    label: React.ReactNode;
    children: React.ReactNode;
    variant?: ColorVariant;
    className?: string;
}>;
declare const DropdownItem: React.FC<{
    icon?: React.ReactNode;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}>;
declare const Modal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}>;
declare const FAB: React.FC<{
    icon?: React.ReactNode;
    children?: React.ReactNode;
    variant?: ColorVariant;
    onClick?: () => void;
}>;
declare const Swap: React.FC<{
    active: boolean;
    onToggle: () => void;
    childrenOn: React.ReactNode;
    childrenOff: React.ReactNode;
}>;
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'white' | 'primary' | 'interactive';
    padding?: boolean;
    paddingSize?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    shadowColor?: string;
    overflowHidden?: boolean;
}
declare const Card: React.FC<CardProps>;
declare const Fieldset: React.FC<{
    legend: string;
    children: React.ReactNode;
    className?: string;
}>;
declare const Filter: React.FC<{
    tags: string[];
    selected: string[];
    onToggle: (tag: string) => void;
    label?: string;
}>;
declare const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    helper?: string;
    error?: string;
}>;
declare const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    error?: string;
}>;
declare const Checkbox: React.FC<React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
}>;
declare const Radio: React.FC<React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
}>;
declare const Toggle: React.FC<React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
}>;
declare const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement> & {
    label?: string;
    error?: string;
}>;
declare const Slider: React.FC<React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
}>;
declare const Rating: React.FC<{
    value: number;
    max?: number;
    onChange?: (val: number) => void;
    label?: string;
}>;
declare const FileInput: React.FC<React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
}>;
declare const Spinner: React.FC<{
    size?: number;
    variant?: ColorVariant;
    className?: string;
}>;
declare const LoadingDots: React.FC<{
    variant?: ColorVariant;
}>;
declare const Progress: React.FC<{
    value: number;
    max?: number;
    variant?: ColorVariant;
    label?: string;
    showValue?: boolean;
}>;
declare const RadialProgress: React.FC<{
    value: number;
    size?: number;
    stroke?: number;
    variant?: ColorVariant;
}>;
declare const Skeleton: React.FC<{
    className?: string;
    shape?: 'rect' | 'circle' | 'text';
}>;
declare const Toast: React.FC<{
    message: string;
    type?: 'success' | 'error' | 'info';
    onClose?: () => void;
}>;
declare const Tooltip: React.FC<{
    text: string;
    children: React.ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
}>;
declare const Badge: React.FC<ComponentProps & {
    variant?: ColorVariant;
}>;
declare const Alert: React.FC<{
    type?: 'success' | 'warning' | 'error' | 'info';
    children: React.ReactNode;
    className?: string;
}>;
declare const Calendar: React.FC<{
    label?: string;
}>;
declare const Accordion: React.FC<{
    items: {
        title: string;
        content: React.ReactNode;
        icon?: React.ReactNode;
    }[];
    allowMultiple?: boolean;
}>;
declare const Avatar: React.FC<{
    src?: string;
    alt?: string;
    size?: Size;
    shape?: 'circle' | 'rounded' | 'square';
    status?: 'online' | 'offline' | 'busy';
    className?: string;
}>;
declare const Divider: React.FC<{
    orientation?: 'horizontal' | 'vertical';
    label?: string;
    className?: string;
}>;
declare const Stat: React.FC<{
    label: string;
    value: string | number;
    icon?: React.ReactNode;
    trend?: 'up' | 'down' | 'neutral';
    trendValue?: string;
    className?: string;
}>;
declare const Table: React.FC<{
    children: React.ReactNode;
    className?: string;
}>;
declare const TableHead: React.FC<{
    children: React.ReactNode;
    className?: string;
}>;
declare const TableBody: React.FC<{
    children: React.ReactNode;
    className?: string;
}>;
declare const TableRow: React.FC<{
    children: React.ReactNode;
    hover?: boolean;
    className?: string;
}>;
declare const TableHeader: React.FC<{
    children: React.ReactNode;
    className?: string;
}>;
declare const TableCell: React.FC<{
    children: React.ReactNode;
    className?: string;
}>;
declare const Timeline: React.FC<{
    items: {
        title: string;
        date?: string;
        description?: string;
        icon?: React.ReactNode;
        status?: 'completed' | 'active' | 'pending';
    }[];
    className?: string;
}>;
declare const Kbd: React.FC<{
    keys: string[];
    label?: string;
    className?: string;
}>;
declare const Join: React.FC<{
    children: React.ReactNode;
    className?: string;
    orientation?: 'horizontal' | 'vertical';
}>;
declare const Status: React.FC<{
    status: 'online' | 'offline' | 'busy' | 'away';
    label?: string;
    className?: string;
}>;
declare const Countdown: React.FC<{
    seconds: number;
    onComplete?: () => void;
    className?: string;
}>;
declare const Hero: React.FC<{
    title: string;
    subtitle?: string;
    image?: string;
    children?: React.ReactNode;
    className?: string;
}>;
declare const Drawer: React.FC<{
    sidebar: React.ReactNode;
    children: React.ReactNode;
    position?: 'left' | 'right';
    open?: boolean;
    onToggle?: () => void;
}>;
declare const Stack: React.FC<{
    children: React.ReactNode;
    className?: string;
}>;
declare const Indicator: React.FC<{
    children: React.ReactNode;
    indicator: React.ReactNode;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    className?: string;
}>;
declare const List: React.FC<{
    items: {
        title: string;
        description?: string;
        icon?: React.ReactNode;
        action?: React.ReactNode;
    }[];
    className?: string;
}>;
declare const ChatBubble: React.FC<{
    message: string;
    sender: 'me' | 'them';
    timestamp?: string;
    avatar?: string;
    className?: string;
}>;
declare const Carousel: React.FC<{
    children: React.ReactNode;
    className?: string;
    autoPlay?: boolean;
    interval?: number;
}>;
declare const Mask: React.FC<{
    children: React.ReactNode;
    shape?: 'circle' | 'rounded' | 'squircle' | 'hexagon';
    className?: string;
}>;
declare const ThemeController: React.FC<{
    themes: {
        name: string;
        colors: {
            primary: string;
            secondary: string;
        };
    }[];
    activeTheme: number;
    onThemeChange: (index: number) => void;
    className?: string;
}>;
declare const Artboard: React.FC<{
    children: React.ReactNode;
    device?: 'phone' | 'tablet' | 'desktop';
    className?: string;
}>;
declare const Diff: React.FC<{
    before: React.ReactNode;
    after: React.ReactNode;
    className?: string;
}>;
declare const Hover3DCard: React.FC<{
    children: React.ReactNode;
    image?: string;
    title?: string;
    description?: string;
    className?: string;
}>;

declare const cn: (...classes: (string | undefined | boolean)[]) => string;

export { Accordion, Alert, Artboard, Avatar, Badge, Breadcrumbs, Button, Calendar, Card, Carousel, ChatBubble, Checkbox, type ColorVariant, type ComponentProps, Countdown, Diff, Divider, Dock, DockItem, Drawer, Dropdown, DropdownItem, FAB, Fieldset, FileInput, Filter, Hero, Hover3DCard, Indicator, Input, Join, Kbd, Label, Link, List, LoadingDots, Mask, Modal, type NavItem, Navbar, Pagination, Progress, RadialProgress, Radio, Rating, Select, type Size, Skeleton, Slider, Spinner, Stack, Stat, Status, Steps, Swap, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Tabs, Textarea, ThemeController, Timeline, Toast, Toggle, Tooltip, Validator, cn };
