# SearchPilot Submission

This is my submission for the proposed SearchPilot test. It has been made with as few libraries as possible, only using React, Zustand and Axios.

The following assumptions were made:

- Every clothe share the same standard for sizing except footwear, nevertheless if some item has changed its type it will lose all its previous chosen sizes, but will regain them if their type doesn't change.

- Every different type has one additional custom input except activewear.

- You can submit your edited item without validating its name.

- You can only validate your item new name if its different from the original.

- To add features in an item, input them in the Features box and hit enter or comma.

- To remove features or sizes in an item, click them.

## Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```
