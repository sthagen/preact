import 'mocha';
import { expect } from 'chai';
import { createElement, createContext } from '../../src';

interface FooContext {
	foo: number;
}

const Ctx = createContext<FooContext>({ foo: 123 });
const Ctx2 = createContext<number>(123);

function RenderWithContext() {
	return (
		<Ctx.Provider value={{ foo: 999 }}>
			<Ctx2.Provider value={2}>
				<Ctx.Consumer>{v => <div>{v.foo + 1}</div>}</Ctx.Consumer>
			</Ctx2.Provider>
		</Ctx.Provider>
	);
}

describe('createContext', () => {
	it('should not throw errors', () => {
		expect(RenderWithContext()).not.to.equal(null);
	});
});
