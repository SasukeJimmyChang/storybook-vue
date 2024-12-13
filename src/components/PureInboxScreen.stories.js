import PureInboxScreen from './PureInboxScreen.vue'

import * as TaskStories from './Task.stories'
import { fireEvent, within } from '@storybook/test'

export default {
  component: PureInboxScreen,
  title: 'PureInboxScreen',
  tags: ['autodocs']
}

export const Default = {}

export const Error = {
  args: { error: true }
}

export const WithInteractions = {
  args: {
    tasks: [
      { ...TaskStories.Default.args.task, id: '1', title: 'Task 1 (pinned)', state: 'TASK_PINNED' },
      { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
      { ...TaskStories.Default.args.task, id: '3', title: 'Task 3 (pinned)', state: 'TASK_PINNED' },
      { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
      { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
      { ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
      { ...TaskStories.Default.args.task, id: '7', title: 'Task 7' }
    ]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Simulates pinning the first task
    await fireEvent.click(canvas.getByLabelText('pinTask-1'))
    // Simulates pinning the third task
    await fireEvent.click(canvas.getByLabelText('pinTask-3'))
  }
}
