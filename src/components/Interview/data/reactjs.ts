import { Subcategory } from "../../../types/categoryTypes"




export const reactData: Subcategory = {
    "core": [
        {
            "q": "What is ReactJS?",
            "a": [
                {
                    "type": "text",
                    "content": "ReactJS is an open-source JavaScript library for building user interfaces, primarily for single-page applications. It's used for handling the view layer in web and mobile apps."
                },
                {
                    "type": "text",
                    "content": "React allows developers to create reusable UI components and efficiently update and render them when data changes."
                }
            ]
        },
        {
            "q": "What are the key features of React?",
            "a": [
                {
                    "type": "list",
                    "content": [
                        "Component-based architecture",
                        "Virtual DOM for efficient updates",
                        "Unidirectional data flow",
                        "JSX syntax",
                        "React Hooks for state and side-effects",
                        "Rich ecosystem and community support"
                    ]
                }
            ]
        },
        {
            "q": "What is JSX? How is it different from HTML?",
            "a": [{
                "type": "code",
                "language": "html",
                "content": `<div>
                     <h2> { item.name } </h2>
                     <p> Price: { item.price } </p>
                     <p> Quantity: { item.quantity } </p>
                    </div>     `

            },]
        },
        {
            "q": "What are React components?",
            "a": [{
                "type": "code",
                "language": "jsx",
                "content": `import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: '#F1F1F1',
          fontWeight: 800,
          marginTop: 40,
        }}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader; `

            },]
        },
        {
            "q": "What is the difference between class and functional components?",
            "a": []
        },
        {
            "q": "What is the Virtual DOM and how does it work?",
            "a": []
        },
        {
            "q": "What is React reconciliation?",
            "a": []
        },
        {
            "q": "What are React keys and why are they important?",
            "a": []
        },
        {
            "q": "What are controlled vs. uncontrolled components?",
            "a": []
        },
        {
            "q": "What is prop drilling and how can you avoid it?",
            "a": []
        }
    ],
    "hooks": [
        {
            "q": "What are React hooks? Why were they introduced?",
            "a": [
                {
                    "type": "text",
                    "content": "React Hooks are functions that let you 'hook into' React state and lifecycle features from function components."
                },
                {
                    "type": "text",
                    "content": "They were introduced to solve several problems:"
                },
                {
                    "type": "list",
                    "content": [
                        "Allow using state and other React features without writing classes",
                        "Make it easier to reuse stateful logic between components",
                        "Simplify complex components by breaking them into smaller functions"
                    ]
                }
            ]
        },
        {
            "q": "What is useState? How does it work?",
            "a": [
                {
                    "type": "text",
                    "content": "useState is a Hook that lets you add React state to function components."
                },
                {
                    "type": "code",
                    "content": "const [state, setState] = useState(initialState);",
                    "language": "jsx"
                },
                {
                    "type": "text",
                    "content": "It returns a pair: the current state value and a function that lets you update it. You can call this function from an event handler or somewhere else."
                }
            ]
        },
        {
            "q": "What is useEffect? Explain its dependency array.",
            "a": []
        },
        {
            "q": "What is the difference between useEffect and useLayoutEffect?",
            "a": []
        },
        {
            "q": "What is useContext? How does React context work?",
            "a": []
        },
        {
            "q": "What is useReducer? When would you use it instead of useState?",
            "a": []
        },
        {
            "q": "What is useCallback? How does it optimize performance?",
            "a": []
        },
        {
            "q": "What is useMemo? How is it different from useCallback?",
            "a": []
        },
        {
            "q": "What is useRef? How is it different from useState?",
            "a": []
        },
        {
            "q": "What is useImperativeHandle? When would you use it?",
            "a": []
        },
        {
            "q": "What is useDebugValue? How is it useful?",
            "a": []
        },
        {
            "q": "How do you create custom hooks? Give an example.",
            "a": []
        }
    ],
    "stateManagement": [
        {
            "q": "What is the difference between state and props?",
            "a": [
                {
                    "type": "text",
                    "content": "State is internal and controlled by the component itself, while props are external and controlled by whatever renders the component."
                },
                {
                    "type": "list",
                    "content": [
                        "Props are passed to the component (similar to function parameters)",
                        "State is managed within the component (similar to variables declared within a function)",
                        "Props are immutable (read-only) within the component",
                        "State can be changed using setState or useState hook"
                    ]
                }
            ]
        },
        {
            "q": "What is lifting state up in React?",
            "a": [
                {
                    "type": "text",
                    "content": "Lifting state up is a pattern where you move shared state to their closest common ancestor in the component tree."
                },
                {
                    "type": "text",
                    "content": "This allows multiple child components to share and synchronize state through props passed down from their parent component."
                }
            ]
        },
        {
            "q": "What is React Context API? When should you use it?",
            "a": []
        },
        {
            "q": "What is Redux? How does it work with React?",
            "a": []
        },
        {
            "q": "What are Redux actions, reducers, and store?",
            "a": []
        },
        {
            "q": "What is Redux Thunk? How does it handle async operations?",
            "a": []
        },
        {
            "q": "What is Redux Saga? How is it different from Thunk?",
            "a": []
        },
        {
            "q": "What is Zustand? How does it compare to Redux?",
            "a": []
        },
        {
            "q": "What is React Query? How does it simplify data fetching?",
            "a": []
        }
    ],
    "performanceOptimization": [
        {
            "q": "What are React Pure Components?",
            "a": [
                {
                    "type": "text",
                    "content": "PureComponent is similar to React.Component but implements shouldComponentUpdate() with a shallow prop and state comparison."
                },
                {
                    "type": "code",
                    "content": "class MyComponent extends React.PureComponent {\n  render() {\n    return <div>{this.props.value}</div>;\n  }\n}",
                    "language": "jsx"
                },
                {
                    "type": "text",
                    "content": "This prevents unnecessary re-renders when props or state haven't changed, improving performance."
                }
            ]
        },
        {
            "q": "What is React.memo()? How does it optimize rendering?",
            "a": [
                {
                    "type": "text",
                    "content": "React.memo is a higher-order component that memoizes the rendered output of a functional component."
                },
                {
                    "type": "code",
                    "content": "const MyComponent = React.memo(function MyComponent(props) {\n  return <div>{props.value}</div>;\n});",
                    "language": "jsx"
                },
                {
                    "type": "text",
                    "content": "It prevents re-rendering if the props haven't changed, similar to PureComponent but for function components."
                }
            ]
        },
        {
            "q": "How does useCallback prevent unnecessary re-renders?",
            "a": []
        },
        {
            "q": "How does useMemo help in performance optimization?",
            "a": []
        },
        {
            "q": "What is code splitting in React? How do you implement it?",
            "a": []
        },
        {
            "q": "What is lazy loading in React? How does React.lazy() work?",
            "a": []
        },
        {
            "q": "What are React fragments and why are they useful?",
            "a": []
        },
        {
            "q": "How does virtualization (e.g., react-window) improve performance?",
            "a": []
        }
    ],
    "advance": [
        {
            "q": "What are Higher-Order Components (HOCs)? Give an example.",
            "a": [
                {
                    "type": "text",
                    "content": "A higher-order component is a function that takes a component and returns a new component with additional props or behavior."
                },
                {
                    "type": "code",
                    "content": "function withLogging(WrappedComponent) {\n  return function(props) {\n    console.log('Rendered:', WrappedComponent.name);\n    return <WrappedComponent {...props} />;\n  };\n}",
                    "language": "jsx"
                }
            ]
        },
        {
            "q": "What are Render Props? How do they work?",
            "a": [
                {
                    "type": "text",
                    "content": "Render props is a pattern where a component's children is a function that the component calls to share some of its internal state."
                },
                {
                    "type": "code",
                    "content": "<DataProvider render={data => (\n  <h1>Hello {data.target}</h1>\n)}/>",
                    "language": "jsx"
                },
                {
                    "type": "text",
                    "content": "This pattern is useful for sharing code between components without repeating logic."
                }
            ]
        },
        {
            "q": "What is the Compound Components pattern?",
            "a": []
        },
        {
            "q": "What are React Portals? When would you use them?",
            "a": []
        },
        {
            "q": "What is an Error Boundary in React? How do you implement one?",
            "a": []
        },
        {
            "q": "What is React Suspense? How does it work with lazy loading?",
            "a": []
        },
        {
            "q": "What is Concurrent Mode in React?",
            "a": []
        },
        {
            "q": "What are Transition Updates in React 18?",
            "a": []
        },
        {
            "q": "What is Server-Side Rendering (SSR) in React?",
            "a": []
        },
        {
            "q": "What is Static Site Generation (SSG) in Next.js?",
            "a": []
        },
        {
            "q": "How does React handle server-side rendering vs. client-side rendering?",
            "a": []
        }
    ]
}