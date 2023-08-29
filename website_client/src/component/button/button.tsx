import { MouseEventHandler, ReactNode } from 'react';

export default function Button(props: {
     children?: ReactNode | ReactNode[],
     className?: string,
     disabled?: boolean,
     onClick?: MouseEventHandler<HTMLButtonElement>
}) {
     return <button type="button" disabled={props.disabled} className={props.className || 'btn btn-white d-flex align-items-center export'}
          onClick={props.onClick}>
          {props.children}</button>;
}
