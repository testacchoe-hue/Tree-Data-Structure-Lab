import { TreeType, QuizQuestion, FAQItem, CodeExample, OperationInfo } from './types';

export const TREE_TYPES: TreeType[] = [
  {
    id: 'binary-tree',
    name: 'Binary Tree',
    description: 'A tree data structure in which each node has at most two children, referred to as the left child and the right child.',
    timeComplexity: {
      search: 'O(N)',
      insert: 'O(N)',
      delete: 'O(N)'
    },
    applications: ['Expression evaluation', 'Huffman coding trees', 'Hierarchical data storage'],
    illustrationType: 'binary'
  },
  {
    id: 'bst',
    name: 'Binary Search Tree (BST)',
    description: 'A node-based binary tree data structure where the left subtree contains only nodes with keys less than the parent, and the right subtree contains only keys greater.',
    timeComplexity: {
      search: 'O(log N) average, O(N) worst',
      insert: 'O(log N) average, O(N) worst',
      delete: 'O(log N) average, O(N) worst'
    },
    applications: ['Dynamic sets', 'Lookup tables', 'Implementing Map and Set structures'],
    illustrationType: 'bst'
  },
  {
    id: 'avl-tree',
    name: 'AVL Tree',
    description: 'A self-balancing binary search tree where the heights of the two child subtrees of any node differ by at most one.',
    timeComplexity: {
      search: 'O(log N)',
      insert: 'O(log N)',
      delete: 'O(log N)'
    },
    applications: ['High-frequency database lookups', 'Memory management', 'Fast searching applications'],
    illustrationType: 'avl'
  },
  {
    id: 'red-black-tree',
    name: 'Red-Black Tree',
    description: 'A self-balancing binary search tree with one extra bit of storage per node: its color (Red or Black). Ensures no path is more than twice as long as any other.',
    timeComplexity: {
      search: 'O(log N)',
      insert: 'O(log N)',
      delete: 'O(log N)'
    },
    applications: ['C++ STL (std::map, std::set)', 'Java Collections (TreeMap, TreeSet)', 'Linux completely fair scheduler'],
    illustrationType: 'rb'
  },
  {
    id: 'b-tree',
    name: 'B-Tree',
    description: 'A self-balancing search tree designed to work well on secondary storage devices, especially hard disks. It generalizes BST allowing nodes to have more than two children.',
    timeComplexity: {
      search: 'O(log N)',
      insert: 'O(log N)',
      delete: 'O(log N)'
    },
    applications: ['Database indexes', 'File systems (NTFS, HFS+)', 'Storage engines'],
    illustrationType: 'b'
  },
  {
    id: 'b-plus-tree',
    name: 'B+ Tree',
    description: 'An N-ary tree with a variable number of children per node. All data is kept in leaf nodes, linked sequentially, while internal nodes only store keys for routing.',
    timeComplexity: {
      search: 'O(log N)',
      insert: 'O(log N)',
      delete: 'O(log N)'
    },
    applications: ['Relational Database index (MySQL InnoDB, SQLite)', 'Filesystems (Btrfs, XFS)', 'Efficient range queries'],
    illustrationType: 'bplus'
  },
  {
    id: 'heap',
    name: 'Heap (Binary Heap)',
    description: 'A specialized tree-based data structure that satisfies the heap property: in a Min-Heap, parent key is ≤ child keys; in Max-Heap, parent key is ≥ child keys.',
    timeComplexity: {
      search: 'O(N)',
      insert: 'O(log N)',
      delete: 'O(log N)'
    },
    applications: ['Priority queues', 'Heapsort algorithm', 'Graph algorithms (Dijkstra, Prim)'],
    illustrationType: 'heap'
  },
  {
    id: 'trie',
    name: 'Trie (Prefix Tree)',
    description: 'An ordered tree data structure used to store a dynamic set or associative array where the keys are usually strings. Path from root to node represents prefix key.',
    timeComplexity: {
      search: 'O(K) where K is key length',
      insert: 'O(K)',
      delete: 'O(K)'
    },
    applications: ['Autocomplete search queries', 'Spell checkers', 'IP routing lookup (longest prefix match)'],
    illustrationType: 'trie'
  },
  {
    id: 'segment-tree',
    name: 'Segment Tree',
    description: 'A tree data structure used for storing information about intervals, or segments. It allows querying which of the stored segments contain a given point.',
    timeComplexity: {
      search: 'O(log N) (Range Query)',
      insert: 'O(log N) (Update)',
      delete: 'O(log N)'
    },
    applications: ['Range sum queries', 'Range minimum/maximum queries', 'Computational geometry'],
    illustrationType: 'segment'
  },
  {
    id: 'fenwick-tree',
    name: 'Fenwick Tree (BIT)',
    description: 'A Binary Indexed Tree (BIT) that provides efficient methods for calculation and manipulation of prefix sums of a sequence of values.',
    timeComplexity: {
      search: 'O(log N) (Prefix Sum)',
      insert: 'O(log N) (Update)',
      delete: 'N/A'
    },
    applications: ['Cumulative frequency tables', 'Inversion count in array', 'Dynamic frequency calculations'],
    illustrationType: 'fenwick'
  },
  {
    id: 'expression-tree',
    name: 'Expression Tree',
    description: 'A specific application of binary trees to represent algebraic expressions. Leaves are operands (constants/variables), and internal nodes are operators.',
    timeComplexity: {
      search: 'O(N) (Evaluation)',
      insert: 'O(N) (Parsing)',
      delete: 'O(N)'
    },
    applications: ['Compiler parsing pipelines', 'Database query plan representation', 'Mathematical calculators'],
    illustrationType: 'expression'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'What is the maximum number of children a binary tree node can have?',
    options: ['1', '2', '3', 'Unlimited'],
    correctAnswer: 1,
    explanation: 'By definition, a binary tree node is restricted to having a maximum of 2 child nodes: a left child and a right child.'
  },
  {
    id: 2,
    question: 'In a Binary Search Tree (BST), what is the relationship between a node and its children?',
    options: [
      'Left child is greater, right child is smaller than parent.',
      'Both left and right children must be equal to parent.',
      'Left child is smaller, right child is greater than parent.',
      'There is no strict relationship in node values.'
    ],
    correctAnswer: 2,
    explanation: 'In a BST, for any given node, all elements in its left subtree are strictly smaller than the node key, and all elements in its right subtree are strictly greater.'
  },
  {
    id: 3,
    question: 'Which of the following tree traversals visits nodes in sorted order for a BST?',
    options: ['Preorder', 'Inorder', 'Postorder', 'Level Order'],
    correctAnswer: 1,
    explanation: 'An in-order traversal (Left, Root, Right) of a Binary Search Tree visits nodes in strictly ascending, sorted order.'
  },
  {
    id: 4,
    question: 'What is the balance factor constraint for an AVL Tree?',
    options: [
      'Height difference of subtrees must be exactly 0.',
      'Height difference of subtrees can be at most 1.',
      'Height of left subtree must be greater than right subtree.',
      'Any balance factor is allowed as long as it remains binary.'
    ],
    correctAnswer: 1,
    explanation: 'An AVL tree is a self-balancing BST where the balance factor (height of left subtree minus height of right subtree) of any node must be either -1, 0, or 1.'
  },
  {
    id: 5,
    question: 'Which tree structure is optimized for disk reads and widely used in database indexing?',
    options: ['AVL Tree', 'Binary Heap', 'B+ Tree', 'Segment Tree'],
    correctAnswer: 2,
    explanation: 'B+ Trees are highly optimized for disk storage. Their large branching factor minimizes disk I/O, and sequential leaf pointers allow super-fast range searches.'
  },
  {
    id: 6,
    question: 'What is the time complexity to insert a value into a balanced AVL Tree with N elements?',
    options: ['O(1)', 'O(log N)', 'O(N)', 'O(N log N)'],
    correctAnswer: 1,
    explanation: 'Because an AVL tree is strictly balanced with a maximum height of O(log N), search, insertion, and deletion are guaranteed to execute in O(log N) time.'
  },
  {
    id: 7,
    question: 'Which tree structure is ideal for spell-checkers and autocomplete queries?',
    options: ['Trie (Prefix Tree)', 'Red-Black Tree', 'Expression Tree', 'Fenwick Tree'],
    correctAnswer: 0,
    explanation: 'A Trie (Prefix Tree) stores keys (words) based on shared prefixes. It can find all strings starting with a given prefix in O(K) time, where K is prefix length.'
  },
  {
    id: 8,
    question: 'In a Min-Heap, where is the minimum element located?',
    options: ['In the leftmost leaf', 'In the rightmost leaf', 'At the root node', 'It can be anywhere in the tree'],
    correctAnswer: 2,
    explanation: 'By the Min-Heap property, the value of any node must be less than or equal to its children. Thus, the absolute minimum element is always at the root.'
  },
  {
    id: 9,
    question: 'What operation is used to restore balance in an AVL or Red-Black Tree during insertion/deletion?',
    options: ['Node Splitting', 'Subtree Rotation', 'Inversion', 'Level Order Swap'],
    correctAnswer: 1,
    explanation: 'Tree rotations (single or double left/right rotations) are used in balanced BSTs to adjust height ratios and restore balancing invariants without losing sorting properties.'
  },
  {
    id: 10,
    question: 'Which traversal is also known as a Breadth-First Search (BFS) on a tree?',
    options: ['Preorder', 'Inorder', 'Postorder', 'Level Order'],
    correctAnswer: 3,
    explanation: 'Level Order traversal visits nodes level by level, from top to bottom and left to right, which is the exact equivalent of Breadth-First Search (BFS).'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: 'What is a binary tree vs a binary search tree (BST)?',
    answer: 'A binary tree is a general structure where each node can have at most two children with no constraints on values. A Binary Search Tree (BST) is a binary tree with a strict ordering invariant: for every node, all left subtree values are smaller, and all right subtree values are larger than that node\'s value.'
  },
  {
    id: 2,
    question: 'Why do we need balanced trees like AVL or Red-Black Trees?',
    answer: 'In standard BSTs, if elements are inserted in sorted order (e.g., 1, 2, 3, 4, 5), the tree degenerates into a single-path linked list. Operations then degrade from O(log N) to O(N). Self-balancing trees automatically perform rotations during insertion and deletion to keep the tree height logarithmic, ensuring reliable O(log N) performance.'
  },
  {
    id: 3,
    question: 'What is "balancing" in self-balancing trees?',
    answer: 'Balancing refers to keeping the height of the tree as small as possible relative to the number of nodes (ideally h ≈ log₂ N). If a subtree gets too tall, the tree triggers single or double rotations to shift nodes up and down, keeping the left and right path lengths nearly equal.'
  },
  {
    id: 4,
    question: 'What is a binary heap and how does it differ from a BST?',
    answer: 'A Heap is a complete binary tree designed for priority queue operations. It enforces the Heap Property (Min-Heap: parent ≤ children) rather than a horizontal sorted order. In a heap, the minimum (or maximum) is found in O(1) at the root, but arbitrary search is O(N), whereas a BST is fully sorted horizontally allowing O(log N) search.'
  },
  {
    id: 5,
    question: 'Why are Tries called prefix trees and when should they be used?',
    answer: 'Tries are called prefix trees because each path down the tree represents a word prefix. Nodes do not store entire keys; instead, their position in the tree defines their key. Tries are optimal for applications like spell checkers, IP routers, and web search autocomplete where we need to query sets of strings based on common starter characters.'
  }
];

export const OPERATIONS: OperationInfo[] = [
  {
    name: 'Insertion',
    description: 'Adding a new node to the tree while maintaining specific invariants (e.g., sorted placement in BST, or heap-up swaps in Binary Heap).',
    complexity: 'O(log N) for balanced trees, O(N) for degenerate cases',
    illustrationType: 'insert'
  },
  {
    name: 'Deletion',
    description: 'Removing a node from the tree and reorganizing remaining nodes (like replacing a BST node with its in-order successor, or heap-down swaps in Heaps).',
    complexity: 'O(log N) for balanced trees, O(N) for degenerate cases',
    illustrationType: 'delete'
  },
  {
    name: 'Searching',
    description: 'Locating a node containing a target value. In a BST, we recursively go left if the target is smaller and right if the target is larger.',
    complexity: 'O(log N) for balanced trees, O(N) for degenerate cases',
    illustrationType: 'search'
  },
  {
    name: 'Traversal',
    description: 'Visiting all nodes in a specific, systematic sequence (depth-first or breadth-first) to read, print, or evaluate tree content.',
    complexity: 'O(N) since every node must be visited exactly once',
    illustrationType: 'traverse'
  },
  {
    name: 'Balancing',
    description: 'Re-arranging node connections via tree rotations to maintain logarithmic height and avoid path degeneration.',
    complexity: 'O(log N) including the initial search, O(1) for actual rotations',
    illustrationType: 'balance'
  }
];

export const CODE_EXAMPLES: CodeExample[] = [
  {
    language: 'JavaScript',
    code: `// Node definition
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// BST Insertion
function insert(root, value) {
  if (root === null) {
    return new Node(value);
  }
  
  if (value < root.value) {
    root.left = insert(root.left, value);
  } else if (value > root.value) {
    root.right = insert(root.right, value);
  }
  
  return root;
}

// In-order Traversal (L -> Root -> R)
function inorder(root) {
  if (root !== null) {
    inorder(root.left);
    console.log(root.value);
    inorder(root.right);
  }
}`
  },
  {
    language: 'Python',
    code: `# Node definition
class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

# BST Insertion
def insert(root, value):
    if root is None:
        return Node(value)
    
    if value < root.value:
        root.left = insert(root.left, value)
    elif value > root.value:
        root.right = insert(root.right, value)
        
    return root

# In-order Traversal (L -> Root -> R)
def inorder(root):
    if root:
        inorder(root.left)
        print(root.value, end=" ")
        inorder(root.right)`
  },
  {
    language: 'Java',
    code: `// Node class
class Node {
    int value;
    Node left, right;

    public Node(int item) {
        value = item;
        left = right = null;
    }
}

// Binary Search Tree operations
class BinarySearchTree {
    Node root;

    // Insert recursive method
    Node insertRec(Node root, int value) {
        if (root == null) {
            root = new Node(value);
            return root;
        }

        if (value < root.value)
            root.left = insertRec(root.left, value);
        else if (value > root.value)
            root.right = insertRec(root.right, value);

        return root;
    }

    // In-order traversal
    void inorderRec(Node root) {
        if (root != null) {
            inorderRec(root.left);
            System.out.print(root.value + " ");
            inorderRec(root.right);
        }
    }
}`
  },
  {
    language: 'C++',
    code: `#include <iostream>
using namespace std;

// Node Structure
struct Node {
    int value;
    Node* left;
    Node* right;
    
    Node(int val) {
        value = val;
        left = nullptr;
        right = nullptr;
    }
};

// BST Insertion
Node* insert(Node* root, int value) {
    if (root == nullptr) {
        return new Node(value);
    }
    
    if (value < root->value) {
        root->left = insert(root->left, value);
    } else if (value > root->value) {
        root->right = insert(root->right, value);
    }
    
    return root;
}

// In-order Traversal
void inorder(Node* root) {
    if (root != nullptr) {
        inorder(root->left);
        cout << root->value << " ";
        inorder(root->right);
    }
}`
  },
  {
    language: 'C',
    code: `#include <stdio.h>
#include <stdlib.h>

// Node representation
struct Node {
    int value;
    struct Node* left;
    struct Node* right;
};

// Create a new node helper
struct Node* createNode(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->value = value;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

// BST Insertion
struct Node* insert(struct Node* root, int value) {
    if (root == NULL) {
        return createNode(value);
    }
    
    if (value < root->value) {
        root->left = insert(root->left, value);
    } else if (value > root->value) {
        root->right = insert(root->right, value);
    }
    
    return root;
}

// In-order Traversal
void inorder(struct Node* root) {
    if (root != NULL) {
        inorder(root->left);
        printf("%d ", root->value);
        inorder(root->right);
    }
}`
  }
];

export const APPLICATIONS_DATA = [
  {
    name: 'File Systems',
    description: 'Operating systems (like Windows NTFS, Linux ext4) model folders and files hierarchically using B-Trees or B+ Trees for ultra-fast disk retrieval.',
    icon: 'folder-tree'
  },
  {
    name: 'Databases Indexes',
    description: 'Relational databases (SQL Server, MySQL, Postgres) use B+ Trees to index columns. B+ Trees maintain sorted rows so search, inserts, and range requests complete in O(log N).',
    icon: 'database'
  },
  {
    name: 'AI & Game Logic',
    description: 'Decision trees are used in Machine Learning models to classify data, and game AI uses minimax evaluation trees to choose optimal moves (like chess).',
    icon: 'brain'
  },
  {
    name: 'Compiler Parsers',
    description: 'Compilers compile code text into Abstract Syntax Trees (AST) or Expression Trees to parse syntax grammar, apply optimizations, and translate to machine binaries.',
    icon: 'code'
  },
  {
    name: 'Networking & IP Routers',
    description: 'High-speed internet routers leverage Trie structures (Prefix trees) to achieve longest-prefix matches, routing packets to correct subnets in nanoseconds.',
    icon: 'network'
  },
  {
    name: 'Decision Frameworks',
    description: 'Dynamic decision structures allow game engines and interactive stories to render multiple branches dynamically based on player choices.',
    icon: 'git-fork'
  },
  {
    name: 'Document Object Model (DOM)',
    description: 'Web browsers parse HTML pages into an interactive DOM tree structure of nodes (body, divs, headings), allowing dynamic CSS updates and JS manipulation.',
    icon: 'chrome'
  },
  {
    name: 'Search Engines',
    description: 'Search indexing engines build huge Tries, Suffix trees, or inverted index trees to provide autocorrect, search suggestions, and rapid document lookups.',
    icon: 'search'
  }
];
