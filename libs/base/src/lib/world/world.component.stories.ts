import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { WorldComponent } from './world.component';

export default {
  title: 'WorldComponent',
  component: WorldComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<WorldComponent>;

const Template: Story<WorldComponent> = (args: WorldComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}