export interface TreeType {
  id: string;
  name: string;
  description: string;
  timeComplexity: {
    search: string;
    insert: string;
    delete: string;
  };
  applications: string[];
  illustrationType: 'binary' | 'bst' | 'avl' | 'rb' | 'b' | 'bplus' | 'heap' | 'trie' | 'segment' | 'fenwick' | 'expression';
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
  explanation: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface CodeExample {
  language: string;
  code: string;
}

export interface OperationInfo {
  name: string;
  description: string;
  complexity: string;
  illustrationType: string;
}

export interface VisualizerNode {
  id: number;
  value: number;
  left: VisualizerNode | null;
  right: VisualizerNode | null;
  x: number;
  y: number;
}

export interface TraversalStep {
  nodeId: number;
  type: 'visit' | 'traverse' | 'backtrack';
  message: string;
}
