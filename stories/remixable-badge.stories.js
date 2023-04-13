import { html } from 'lit';
import '../src/remixable-badge.js';

export default {
  title: 'RemixableBadge',
  component: 'remixable-badge',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <remixable-badge
      style="--remixable-badge-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </remixable-badge>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
