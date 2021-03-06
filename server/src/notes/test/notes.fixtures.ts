import { repositoryMockFactory } from '../../common/fixtures';

const note = {
  id: '1',
  title: 'Note One',
  description: 'This is board one',
  isActive: 1,
  createdAt: new Date('2019-05-15T02:41:39.111Z'),
  updatedAt: new Date('2019-05-15T02:41:39.111Z'),
  board: { id: '1' },
  boardId: '1',
};

const notes = [note];

const mockRepository = {
  data: notes,
};
export const fixtures = Object.freeze({
  note,
  notes,
  mockRepository,
  repositoryMockFactory,
});
