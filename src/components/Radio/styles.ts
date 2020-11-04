import styled, { css } from 'styled-components';
import { RadioProps } from '.';

type LabelProps = Pick<RadioProps, 'labelColor'>;

export const RadioWrapper = styled.main`
  display: flex;
  align-items: center;
`;

export const RadioInput = styled.input`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.colors.primary};
    border-radius: 50%;
    background: transparent;
    transition: background ${theme.transition.fast};
    outline: none;
    cursor: pointer;

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:before {
      content: '';
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background: ${theme.colors.primary};
      opacity: 0;
      transition: opacity ${theme.transition.fast};
      position: absolute;
    }

    &:checked {
      &:before {
        opacity: 1;
      }
    }
  `}
`;

export const Label = styled.label<LabelProps>`
  ${({ theme, labelColor = 'white' }) => css`
    padding-left: ${theme.spacings.xxsmall};
    color: ${theme.colors[labelColor]};
    line-height: 1;
    cursor: pointer;
  `}
`;
