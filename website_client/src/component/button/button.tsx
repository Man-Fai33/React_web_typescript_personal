import ButtonBase from '@mui/material/Button';
import { MouseEventHandler, ReactNode } from 'react';

export default function Button(props: {
     children?: ReactNode | ReactNode[],
     className?: string,
     disabled?: boolean,
     onClick?: MouseEventHandler<HTMLButtonElement>
}) {
     return <ButtonBase disabled={props.disabled} className={props.className}
          onClick={props.onClick}>
          {props.children}</ButtonBase>;
}