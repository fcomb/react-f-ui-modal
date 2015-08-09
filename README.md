# react-f-ui-modal
### Features
* full control of content
* outer click closes modal
* `esc` closes too!
* stateless: just pass `active` as prop
* animation with [react-motion](https://github.com/chenglou/react-motion)

### Install

`npm i --save react-f-ui-modal`

### Usage
```
import Modal from 'react-f-ui-modal';
import 'react-f-ui-modal/styles/modal';
```

### Props
```
active: bool.isRequired
```
State of modal.

```
closeOnOuterClick: bool
```
Close if click outside content?

```
className: string
```
Additional className, default is `f-modal`.

```
children: node
```
Body of modal.

```
onClose: func,
```
Handler.

### Example
