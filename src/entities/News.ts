import Category from './Category';
import Student from './Student';

interface News {
  _id: string;
  student: Student;
  classroom: string;
  category: Category;
  message: string;
  updatedAt: Date;
}

export default News;
