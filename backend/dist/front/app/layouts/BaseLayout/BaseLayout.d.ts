import { FC } from 'react';
import { Props } from '../../types/props';
interface BaseLayoutProps extends Props {
    title: string;
}
declare const BaseLayout: FC<BaseLayoutProps>;
export default BaseLayout;
