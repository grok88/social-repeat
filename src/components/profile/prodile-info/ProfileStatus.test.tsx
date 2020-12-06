import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("it shows the expected text when clicked (testing the wrong way!)", () => {
        const component = create(<ProfileStatus status={'Grok is Good!'} updateStatus={() => {
        }}/>);
        const instance = component.getInstance();
        //@ts-ignore
        expect(instance && instance.state.status).toBe('Grok is Good!');
    });
    test("<span> should be displayed after creation", () => {
        const component = create(<ProfileStatus status={'Grok is Good!'} updateStatus={() => {
        }}/>);
        const instance = component.root;
        const span = instance.findByType("span");

        expect(span).toBeDefined();
        expect(span).not.toBeNull();
    });
    test("<input> shouldn't be displayed after creation", () => {
        const component = create(<ProfileStatus status={'Grok is Good!'} updateStatus={() => {
        }}/>);
        const instance = component.root;

        expect(() => {
            const input = instance.findByType("input");
        }).toThrow();
    });
    test("Span should be displayed correct status after creation", () => {
        const component = create(<ProfileStatus status={'Grok is Good!'} updateStatus={() => {
        }}/>);
        const instance = component.root;
        const span = instance.findByType("span");

        expect(span.children[0]).toBe('Grok is Good!');
    });
    test("<input> should be displayed while click on span", () => {
        const component = create(<ProfileStatus status={'Grok is Good!'} updateStatus={() => {
        }}/>);
        const spanInstance = component.root;
        const span = spanInstance.findByType("span");

        expect(span).toBeDefined();
        expect(span).not.toBeNull();


        const instance = component.getInstance();
        //@ts-ignore
        expect(instance && instance.state.editMode).toBe(false)
        //@ts-ignore
        instance && instance.activateEditMode();
        //@ts-ignore
        expect(instance && instance.state.editMode).toBe(true)
    });
    test("<input> should be Displayed in editMode instead of <span>", () => {
        const component = create(<ProfileStatus status={'Grok is Good!'} updateStatus={() => {
        }}/>);
        const instance = component.root;
        const span = instance.findByType("span");

        expect(() => {
            const input = instance.findByType("input");
        }).toThrow();


        span.props.onClick();

        const input = instance.findByType("input");
        expect(input.props.value).toBe('Grok is Good!');
    });
    test('Callback should be called',()=>{
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={'Grok is Good!'} updateStatus={mockCallback}/>);
        const instanse = component.getInstance();
        //@ts-ignore
        instanse&&instanse.deActivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});