import { animation, style, animate, trigger, transition, useAnimation } from '@angular/animations';

export const reusableTransitionAnimation = animation([
  style({
    opacity: '{{ opacity }}',
    backgroundColor: '{{ backgroundColor }}'
  }),
  animate('{{ time }}')
]);

export const reusableSnippetAnimation = trigger('openCloseReady', [
  transition('open => closed', [
    useAnimation(reusableTransitionAnimation, {
      params: {
        opacity: 1,
        backgroundColor: 'cornflowerblue',
        time: '2s'
      }
    })
  ]),
  transition('closed => open', [
    useAnimation(reusableTransitionAnimation, {
      params: {
        opacity: 0.8,
        backgroundColor: 'cadetblue',
        time: '1s'
      }
    })
  ])
])
