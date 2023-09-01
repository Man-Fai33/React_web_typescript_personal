import { ButtonBase } from '@mui/material';
import { MouseEventHandler, ReactNode } from 'react';

export default function Button(props: {
     children?: ReactNode | ReactNode[],
     className?: string,
     disabled?: boolean,
     onClick?: MouseEventHandler<HTMLButtonElement>
}) {
     return <button disabled={props.disabled} className={props.className}
          onClick={props.onClick}>
          {props.children}</button>;
}
