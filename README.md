# ngx-gradient-text

<a href="https://ngxui.com" target="_blank" style="display: flex;gap: .5rem;align-items: center;cursor: pointer; padding: 0 0 0 0; height: fit-content;">
  <img src="https://ngxui.com/assets/img/ngxui-logo.png" style="width: 64px;height: 64px;">
  <p style="font-weight: bold; padding: 0; margin: 0; font-size: 4rem">NGXUI</p>
</a>

This Library is part of the NGXUI ecosystem. <br>
View all available components at https://ngxui.com

`@omnedia/ngx-gradient-text` is an Angular library that provides a dynamic gradient animation effect for text. This component allows you to display text with a smooth, animated gradient that transitions between two customizable colors.

## Features

- Animated gradient effect for text.
- Customizable gradient start and end colors.
- Lightweight and easy to integrate as a standalone component.

## Installation

Install the library using npm:

```bash
npm install @omnedia/ngx-gradient-text
```

## Usage

Import the `NgxGradientTextComponent` in your Angular module or component:

```typescript
import {NgxGradientTextComponent} from '@omnedia/ngx-gradient-text';

@Component({
  ...
    imports:
[
  ...
    NgxGradientTextComponent,
],
...
})
```

Use the component in your template:

```html

<om-gradient-text
  [text]="'Gradient Text Effect!'"
  [gradientStart]="'#ff7f50'"
  [gradientEnd]="'#6495ed'"
  styleClass="custom-gradient-text"
></om-gradient-text>
```

## API

```html

<om-gradient-text
  [text]="text"
  [gradientStart]="gradientStart"
  [gradientEnd]="gradientEnd"
  styleClass="your-custom-class"
></om-gradient-text>
```

- `text` (required): The text content to be displayed with the gradient effect.
- `gradientStart` (optional): The starting color of the gradient. Accepts any valid CSS color value.
- `gradientEnd` (optional): The ending color of the gradient. Accepts any valid CSS color value.
- `styleClass` (optional): A custom CSS class to apply to the gradient text element.

## Example

```html

<om-gradient-text
  [text]="'Hello World!'"
  [gradientStart]="'#ff69b4'"
  [gradientEnd]="'#8a2be2'"
  styleClass="gradient-text-style"
></om-gradient-text>
```

This will create an animated gradient text effect where the text "Hello World!" smoothly transitions between pink and blue-violet.

## Styling

To customize the appearance of the gradient text, use the styleClass input to apply your own CSS classes.

```css
.gradient-text-style {
  font-size: 48px;
  font-weight: bold;
  font-family: 'Verdana', sans-serif;
}
```

This will style the gradient text with a custom font size, weight, and font family.

## Contributing

Contributions are welcome. Please submit a pull request or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License.
