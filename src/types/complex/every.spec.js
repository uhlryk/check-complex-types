/* eslint-disable no-new-wrappers */
import everyType from "./every";
import types from "../../index";
describe("EVERY type", () => {
    it("throws error for undefined types list  compared to undefined", () => {
        expect(() => everyType()).to.throw("Only Non zero length array of types is accepted");
    });

    it("throws error for empty type list compared to undefined", () => {
        expect(() => everyType(undefined, [])).to.throw("Only Non zero length array of types is accepted");
    });

    it("returns true value for comparing to single type in array and matched", () => {
        expect(everyType({ someProp: 123 }, [types.INTERFACE({ someProp: types.NUMBER })])).to.be.true();
    });

    it("returns true value for comparing to multiple types in array and matched", () => {
        expect(
            everyType({ someProp: 123, otherProp: "test" }, [
                types.INTERFACE({ someProp: types.NUMBER }),
                types.INTERFACE({ otherProp: types.STRING })
            ])
        ).to.be.true();
    });

    it("returns false value for comparing to multiple types in array and not matched", () => {
        expect(
            everyType({ someProp: 123, wrongProp: "test" }, [
                types.INTERFACE({ someProp: types.NUMBER }),
                types.INTERFACE({ otherProp: types.STRING })
            ])
        ).to.be.false();
    });
});
