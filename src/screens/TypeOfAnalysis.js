import { useForm } from "react-hook-form";

import { useAppState } from "../state";
import { Button, Field, Form, Input } from "../Forms";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MdOutlineUploadFile } from "react-icons/md";
import { changeTypeofAnalysis } from "../redux/FormSlice";
import { Row, Col, Card } from "react-bootstrap";
import "./Styles.css";

import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";

export default function TypeOfAnalysis({ onButtonClick }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedRadio, setSelectedRadio] = useState("regulatory");
 
  const dispatch = useDispatch();
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    // formState: {},
  } = useForm({ defaultValues: state });
 


  const saveData = (data) => {
    setState({ ...state, ...data });
    dispatch(
      changeTypeofAnalysis({
        analyticalfeasibile: data.analyticalfeasibile,
        choosefile: data.choosefile,
        formfilling: data.formfilling,
        methodologyfollowed: data.methodologyfollowed,
        methodvalidation: data.methodvalidation,
        specialinstruction: data.specialinstruction,
        test: data.test,
      })
    );
    onButtonClick("ConfirmDetails");
  };
  const handleOptionChange = (event) => {
    setSelectedRadio(event.target.value);
  };
   const renderRadioList = () => {
    if (selectedRadio === 'regulatory') {
      return (
        <Row>
        <div className="cardcolhed">
          <div className="mb-3">
           <Field label="Regulatory"><text>
          (Form-39/DMF Filing/ANDA Filing/Any Query)*
            </text></Field>
          </div>
          <div className="row">
           
              <div className="col">
                <div
                  style={{
                    display: "flex",
                   
                  }}
                >
                  <div >
                  <Field>
                  <Input
                    {...register("formfilling")}
                    type="radio"
                    id="validation"
                    value="validation"
                    name="formfilling"
                    checked={selectedOption === "validation"}
                    onChange={() =>
                      setSelectedOption("validation")}
                    className="customRadio"
                  
                  />
                  </Field>
                  </div>
                  <div>
                  <label className="space">Validation</label>
                  </div>
                </div>

                <div className="col">
                <div style={{ display: "flex" }}>
                <div>
                  <Field>
                  <Input
                    {...register("formfilling")}
                    type="radio"
                    id="usfda"
                    value="usfda"
                    name="formfilling"
                    
                    checked={selectedOption === "usfda"}
                    onChange={() =>
                      setSelectedOption("usfda")}
                    className="customRadio"                                  />
                  </Field>
                  </div>
                  <div>
                  <label className="space">USFDA</label>
                  </div>
                </div>
              </div>


              </div>

              <div className="col">
                <div style={{ display: "flex" }}>
                <div>
                  <Field>
                  <Input
                    {...register("formfilling")}
                    type="radio"
                    id="verification"
                    value="verification"
                    name="formfilling"
                    checked={selectedOption === "verification"}
                    onChange={() =>
                      setSelectedOption("verification")}
                    className="customRadio"
                    
                                                     />
                   </Field>
                   </div>
                   <div>
                  <label className="space">Verification</label>
                  </div>
                 
                </div>

                <div className="col">
                <div style={{ display: "flex" }}>
                <div>
                <Field>
                  <Input
                    {...register("formfilling")}
                    type="radio"
                    id="eugmp"
                    value="eugmp"
                    name="formfilling"
                    
                    checked={selectedOption === "eugmp"}
                    onChange={() =>
                      setSelectedOption("eugmp")}
                    className="customRadio"                                  />
                  </Field>
                  </div>
                  <div>
                  <label className="space">EU GMP</label>
                  </div>
                </div>
              </div>

              </div>

               <div className="col">
                <div style={{ display: "flex" }}>
                <div>
                  <Field>
                  <Input
                    {...register("formfilling")}
                    type="radio"
                    id="transfer"
                    value="transfer"
                    name="formfilling"
                
                    checked={selectedOption === "transfer"}
                    onChange={() =>
                      setSelectedOption("transfer")}
                    className="customRadio"                                  />
                  </Field>
                  </div>
                  <div>
                  <label className="space">Transfer</label>
                  </div>
                 
                </div>

                <div className="col">
                <div style={{ display: "flex" }}>
                <div>
                <Field>
                  <Input
                    {...register("formfilling")}
                    type="radio"
                    id="localfda"
                    value="localfda"
                    name="formfilling"
                  
                    checked={selectedOption === "localfda"}
                    onChange={() =>
                      setSelectedOption("localfda")}
                    className="customRadio"                                  />
                  </Field>
                  </div>
                  <div>
                  <label className="space">
                    Local FDA(DCA)
                  </label>
                  </div>
                  
                </div>
              </div>
              </div>

              <div className="col">
                <div style={{ display: "flex" }}>
                <div>
                  <Field>
                  <Input
                    {...register("formfilling")}
                    type="radio"
                    id="stability"
                    value="stability"
                    name="formfilling"
                
                    checked={selectedOption === "stability"}
                    onChange={() =>
                      setSelectedOption("stability")}
                    className="customRadio"                                  />
                   </Field>
                   </div>
                   <div>
                 
                  <label className="space">Stability</label>
                  </div>
                 
                </div>

                <div className="col">
                <div style={{ display: "flex" }}>
                <div>
                <Field>
                  <Input
                    {...register("formfilling")}
                    type="radio"
                    id="nabl"
                    value="nabl"
                    name="formfilling"
              
                    checked={selectedOption === "nabl"}
                     onChange={() =>
                      setSelectedOption("nabl")}
                    className="customRadio"                                  />
                  </Field>
                  </div>
                  <div>
                  <label className="space">NABL</label>
                  </div>
                 
                </div>
              </div>
              </div>

              <div className="col">
                <div style={{ display: "flex" }}>
                <div>
                  <Field>
                  <Input
                    {...register("formfilling")}
                    type="radio"
                    id="batchrelease"
                    value="batchrelease"
                    name="formfilling"
                    
                    checked={selectedOption === "batchrelease"}
                    onChange={() =>
                      setSelectedOption("batchrelease")}
                    className="customRadio"                                  />
                  </Field>
                  </div>
                  <div>
                  <label className="space">Batch Release</label>
                  </div>

                  </div>

                  <div className="col">
                <div style={{ display: "flex" }}>
                <div>
                <Field>
                  <Input
                    {...register("formfilling")}
                    type="radio"
                    id="other"
                    value="other"
                    name="other"

                  checked={selectedOption === "other"}
                    onChange={() =>
                      setSelectedOption("other")}
                    className="customRadio"                                  />
                  </Field>
                  </div>
                  <div>
                  <label className="space">Other</label>
                  </div>
                </div>
              </div> 
              
              </div>

              <div className="col">
              <span>
                {selectedOption === "other" && (
                  <Input
                    type="text"
                    className="NatureOfSample"
                  />
                )}
              </span>
            </div>
            </div>

          
          </div>
       
      </Row>
      );
    } else {
      return (
        
        <Col md={6}>
          <div className="mb-3">
          <Field>
            <text className="mb-3">Other than Regulatory</text>
            </Field>
          </div>
          
            <div style={{ display: "flex", marginBottom: 20, }}>

            <div>
                <Field>
                <Input
                  {...register("analyticalfeasibile")}
                  type="checkbox"
                  value="r&dsample"
                  name="analytical"
                
                  // checked={selectedOption1 === "option11"}
                  // onChange={handleOptionChange1}
                  className="customRadio"                           />
              </Field>
              </div>
              <div>
              <label className="space">Analytical Feasibility</label>
              </div>
            
              
                <div
                style={{
                  marginLeft: 60,
                  alignItems: "center",
                  display: "flex",
                }}
              >
                </div>
                <div>
                <Field>
                <Input
                  {...register("analyticalfeasibile")}
                  type="checkbox"
                  value="r&dsample"
                  name="analyticalfeasibile"
                  
                  // checked={selectedOption1 === "option12"}
                  // onChange={handleOptionChange1}
                  className="customRadio"                          />
              </Field>
              </div>
              <div>
              <label className="space">R&D Sample</label>
              </div>
               </div>




           
          
          <div style={{ display: "flex" }}>
            
            <div>
              <Field>
              <Input
                {...register("analyticalfeasibile")}
                type="checkbox"
                value="methoddevelopement"
                name="analyticalfeasibile"
                
                // checked={selectedOption1 === "option13"}
                // onChange={handleOptionChange1}
                className="customRadio"                          />
              </Field>
              </div>
              <div>
              <label className="space">Method Development</label>
              </div>
          
              
             <div
              style={{
                marginLeft: 50,
                alignItems: "center",
                display: "flex",
              }}
            >
               </div>
              <div>
              <Field>
              <Input
                {...register("analyticalfeasibile")}
                type="checkbox"
                value="batchanalysis"
                name="analyticalfeasibile"
                
                // checked={selectedOption1 === "option14"}
                // onChange={handleOptionChange1}
                className="customRadio"                          />
              </Field>
              </div>
              <div>
              <label className="space">Batch Analysis</label>
              </div>
            </div>
         
      </Col>

       
      );
    }
  };

  return (
    <div>
      <div>
        <div>
          <div>
            <Card className="maincards">
              <div className="cardtitle">
                <text className="cardtitlehed">Type of Analysis</text>
              </div>
              <Form onSubmit={handleSubmit(saveData)}>
                <fieldset>
                  <div className="cardcolumnpadding">
                     <label className="cardcolhed mb-2" >Is comes under?</label>
                     
                   <div className="row">
                        <div className="col-6" style={{ display: "flex" }}>
                       <div className="col">
                            <div
                              style={{
                                display: "flex",
                                
                              }}
                            >
                              <div >
                              <Field >
                              <Input
                              {...register("choice")}
                                type="radio"
                                id="regulatory"
                                value="regulatory"
                                name="choice"
                                checked={selectedRadio === 'regulatory'}
          onChange={handleOptionChange}
                                className="customRadio"
                              />
                              </Field> 
                              </div>
                              <div className="cardcolhed">
                              <label className="space" >Regulatory</label>
                              </div>
                            </div>
                            </div>

                          <div className="col">
                            <div style={{ display: "flex" }}>
                            <div> 
                            <Field >
                              <Input
                              {...register("choice")}
                              type="radio"
                              id="otherregulatory"
                              value="otherregulatory"
                              name="choice"
                              checked={selectedRadio === 'otherregulatory'}
          onChange={handleOptionChange}
                              className="customRadio"
                              />
                               </Field>
                               </div>
                               <div className="cardcolhed">
                              <label className="space">Other than Regulatory</label>
                              </div>
                           </div>
                          </div> 
                        </div>
                            </div>
                       
                    <hr />

                     <Col md={12} style={{ display: "block" }} className="mb-3">
                       <Row>
                        <div className="cardcolhed">
                        {renderRadioList()}
                         </div>
                      </Row> 
                      
                    </Col> 
                    <hr />

                    {/*----------------------------------------------- First Column End ------------------------------------*/}
                  

                <Row className="cardcolhed">
                    {/* <Col md={6}>
                      <div className="mb-3">
                      <Field>
                        <text className="mb-3">Other than Regulatory</text>
                        </Field>
                      </div>
                      
                        <div style={{ display: "flex", marginBottom: 20, }}>

                        <div>
                            <Field>
                            <Input
                              {...register("analyticalfeasibile")}
                              type="checkbox"
                              value="r&dsample"
                              name="analytical"
                              disabled={disableNonRegular}
                              // checked={selectedOption1 === "option11"}
                              // onChange={handleOptionChange1}
                              className="customRadio"                           />
                          </Field>
                          </div>
                          <div>
                          <label className="space">Analytical Feasibility</label>
                          </div>
                        
                          
                            <div
                            style={{
                              marginLeft: 60,
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            </div>
                            <div>
                            <Field>
                            <Input
                              {...register("analyticalfeasibile")}
                              type="checkbox"
                              value="r&dsample"
                              name="analyticalfeasibile"
                              disabled={disableNonRegular}
                              // checked={selectedOption1 === "option12"}
                              // onChange={handleOptionChange1}
                              className="customRadio"                          />
                          </Field>
                          </div>
                          <div>
                          <label className="space">R&D Sample</label>
                          </div>
                           </div>




                       
                      
                      <div style={{ display: "flex" }}>
                        
                        <div>
                          <Field>
                          <Input
                            {...register("analyticalfeasibile")}
                            type="checkbox"
                            value="methoddevelopement"
                            name="analyticalfeasibile"
                            disabled={disableNonRegular}
                            // checked={selectedOption1 === "option13"}
                            // onChange={handleOptionChange1}
                            className="customRadio"                          />
                          </Field>
                          </div>
                          <div>
                          <label className="space">Method Development</label>
                          </div>
                      
                          
                         <div
                          style={{
                            marginLeft: 50,
                            alignItems: "center",
                            display: "flex",
                          }}
                        >
                           </div>
                          <div>
                          <Field>
                          <Input
                            {...register("analyticalfeasibile")}
                            type="checkbox"
                            value="batchanalysis"
                            name="analyticalfeasibile"
                            disabled={disableNonRegular}
                            // checked={selectedOption1 === "option14"}
                            // onChange={handleOptionChange1}
                            className="customRadio"                          />
                          </Field>
                          </div>
                          <div>
                          <label className="space">Batch Analysis</label>
                          </div>
                        </div>
                     
                  </Col> */}

                    <Col md={6} style={{ display: "block" }}>
                      <div className=" cardcolhedd">
                        <div className="mb-3">
                        <Field><text>
                            If Method
                            Validation/Verification/Transfer/Development are
                            performed at Revin Labs please specify the Report
                            Ref. No.
                          </text>
                          </Field>
                        </div> 
                        <div className="d-flex">

                        <div className="col">
                                <div
                                  style={{
                                    display: "flex",
                                    
                                  }}
                                >
                                  <div>
                                  <Field>
                                  <Input
                                    {...register("methodvalidation")}
                                    type="radio"
                                    value="no"
                                    checked={selectedOption === "no"}
                                    onChange={() => setSelectedOption("no")}
                                    name="methodvalidation"
                                    // checked={selectedOption2 === "option14"}
                                    //onChange={handleOptionChange2}
                                    className="customRadio"    
                                  />
                                  </Field>
                                  </div>
                                  <div>
                                  <label className="space">No</label>
                                  </div>
                                </div>
                              </div>
                         

                              <div className="col">
                                <div
                                  style={{
                                    display: "flex",
                                  
                                  }}
                                >
                                  <div>
                                  <Field>
                                  <Input
                                    {...register("methodvalidation")}
                                    type="radio"
                                    value="yes"
                                    checked={selectedOption === "yes"}
                                    onChange={() => setSelectedOption("yes")}
                                    name="methodvalidation"
                                    //checked={selectedOption2 === "option15"}
                                    //onChange={handleOptionChange2}
                                    className="customRadio"    
                                  />
                                  </Field>
                                  </div>
                                  <div>
                                  <label className="space">Yes</label>
                                  </div>
                                </div>
                              </div>
                        

                          <div>
                          <div className="col">
                              <span>
                                {selectedOption === "yes" && (
                                  <Input
                                    type="text"
                                    className="methodValidation"
                                  />
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                            </Col>
                  </Row>
                  <hr />
                  {/* --------------------------------------------3rd Column starting ----------------------------------*/}
                    <Row>
                    <Col md={6} className="col-12 cardcolhed">
                  <div className="mb-3">
          <label>Methodology</label>
                      </div>
                     <div
                        style={{
                          display: "flex",
                          
                        }}
                      >

<div className="col">
                                <div
                                  style={{
                                    display: "flex",
                                    
                                  }}
                                >
                                  <div>
                                  <Field>
                                  <Input
                                     {...register("methodologyfollowed")}
                                     type="radio"
                                     id="stp"
                                     value="stp"
                                     //checked={selectedOptionmet === "option3"}
                                     //onChange={() => setSelectedOptionmet("option3")}
                                     name="methodologyfollowed"
                                     //checked={selectedOption4 === "option22"}
                                     //onChange={handleOptionChange4}
                                     className="customRadio" 
                                  />
                                  </Field>
                                  </div>
                                  <div>
                                  <label className="space">STP</label>
                                  </div>
                                </div>
                              </div>
                       

<div className="col">
                                <div
                                  style={{
                                    display: "flex",
                                    
                                  }}
                                >
                                  <div>
                                  <Field>
                                  <Input
                                   {...register("methodologyfollowed")}
                                   type="radio"
                                   id="gtp"
                                   value="gtp"
                                   //checked={selectedOptionmet === "option2"}
                                   //onChange={() => setSelectedOptionmet("option2")}
                                   name="methodologyfollowed"
                                   //checked={selectedOption4 === "option23"}
                                   //onChange={handleOptionChange4}
                                   className="customRadio"
                                  />
                                  </Field>
                                  </div>
                                  <div>
                                  <label className="space">GTP</label>
                                  </div>
                                </div>
                              </div>
                       

<div className="col">
                                <div
                                  style={{
                                    display: "flex",
                                    
                                  }}
                                >
                                  <div>
                                  <Field>
                                  <Input
                                    {...register("methodologyfollowed")}
                                    type="radio"
                                    className='customRadio'
                                    id="referenceno"
                                    value="referenceno"
                                    //checked={selectedOptionmet === "option1"}
                                    //onChange={() => setSelectedOptionmet("option1")}
                                    name="methodologyfollowed"
                                    //checked={selectedOption4 === "option24"}
                                    //onChange={handleOptionChange4}
                                  />
                                  </Field>
                                  </div>
                                  <div>
                                  <label className="space">Reference No</label>
                                  </div>
                                </div>
                              </div>
                        
                        
                        {/* <div style={{ alignItems: "center", display: "flex" }}>
                          {selectedOptionmet === "option1" && (
                            <Input type="text" className="methodology" />
                          )}
                          </div> */}
                      </div>
                          </Col> 

                   <Col md={6} className="cardcolhed">
                      <div className="mb-3">
                        <label>Test to be carried out as per</label>
                      </div>
                      
                      <div style={{ display: "flex"}}>
                        <div className="col"
                          style={{
                            alignItems: "center",
                            display: "flex",
                            // marginRight: 40,
                          }}
                        >
                          <div>
                         
                          <Input
                            {...register("test")}
                            type="checkbox"
                            value="usp"
                            name="test"
                            //checked={selectedOption3 === "option16"}
                            //onChange={handleOptionChange3}
                            className="customRadio"                          />
                         
                          </div>
                          <div>
                          <label className="space" >USP</label>
                          </div>
                        </div>
                        <div  className="col"
                          style={{
                            alignItems: "center",
                            display: "flex",
                            // marginRight: 40,
                          }}
                        >
                          <div>
                         
                            
                          <Input
                            {...register("test")}
                            type="checkbox"
                            value="bp"
                            name="test"
                            //checked={selectedOption3 === "option17"}
                            //onChange={handleOptionChange3}
                            className="customRadio"                          />
                          
                          </div>
                          <div>
                          <label className="space">BP</label>
                          </div>
                        </div>
                        <div  className="col"
                         style={{ alignItems: "center", display: "flex" }}>
                        <div>
                        
                          <Input
                            {...register("test")}
                            type="checkbox"
                            value="ep"
                            name="test"
                            // checked={selectedOption3 === "option18"}
                            //onChange={handleOptionChange3}
                            className="customRadio"                          />
                          
                          </div>
                          <div>
                          <label className="space">EP</label>
                          </div>
                        </div>
                      </div>


                      
                      <div  
                      style={{ display: "flex", marginTop: 20 }}>
                        <div  className="col"
                          style={{
                            alignItems: "center",
                            display: "flex",
                            // marginRight: 52,
                          }}
                        >
                          <div>
                       
                          <Input
                            {...register("test")}
                            type="checkbox"
                            value="ip"
                            name="test"
                            //checked={selectedOption3 === "option19"}
                            //onChange={handleOptionChange3}
                            className="customRadio"                          />
                       
                          </div>
                          <div>
                          <label className="space">IP</label>
                          </div>
                        </div>
                        <div  className="col"
                          style={{
                            alignItems: "center",
                            display: "flex",
                            // marginRight: 45,
                          }}
                        >
                          <div>
                        
                          <Input
                            {...register("test")}
                            type="checkbox"
                            value="is"
                            name="test"
                            //checked={selectedOption3 === "option20"}
                            //onChange={handleOptionChange3}
                            className="customRadio"                          />
                          
                          </div>
                          <div>
                          <label className="space">IS</label>
                          </div>
                        </div>
                        <div  className="col"
                         style={{ alignItems: "center", display: "flex" }}>
                        <div>
                     
                          <Input
                            {...register("test")}
                            type="checkbox"
                            value="methodofanalysis"
                            name="test"
                            //checked={selectedOption3 === "option21"}
                            //onChange={handleOptionChange3}
                            className="customRadio"                          />
                         
                          </div>
                          <div>
                          <label className="space">Method of Analysis</label>
                          </div>
                        </div>
                      </div>
                        </Col>
                        </Row> 
                  <hr />

                  {/*------------------------------------------------------ second column End--------------------------------------------------- */}

                  <Row>
                    <Col
                      md={6}
                      className="col-12 cardcolhed"
                      style={{ display: "block" }}
                    ><div className=" mb-3">
                        <label>Attachfile</label>
                      </div>
                      <div>
                        <Card
                          style={{
                            height: 70,
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: 12,
                            fontWeight: 500,
                            color: "#8F8F8F",
                            border: "1px dashed",
                            display:'flex'
                            
                          }}
                        ><div className="d-flex">
                            <MdOutlineUploadFile size={24} color="#9AC037" />
                            <Field>
                            <Input
                              type="file"
                              name="choosefile"
                              className="customInput"
                              {...register("choosefile")}
                            />
                            </Field>
                          </div>
                        </Card>
                      </div>

                    
                    </Col>
                    <Col
                      md={6}
                      className="cardcolhed"
                      style={{ display: "block" }}
                    >
                      <div className="mb-3">
                        <label>Special Instructions If any other</label>
                      </div>
                      <div>
                      <Field>
                        <Input
                          name="specialinstruction"
                          type="textarea"
                          className="spclInstruction"
                          {...register("specialinstruction")}
                        />
                        </Field>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-end",
                          margin: 10,
                          marginTop: 50,
                        }}
                      >
                        <Button
                          type="button"
                          className="previous"
                          onClick={() => onButtonClick("BatchDetails")}
                        >
                          <BiLeftArrowAlt size={24} color="#9AC037" />
                          Previous
                        </Button>
                        <Button type="submit" className="next" name="Next">
                          Next <BiRightArrowAlt size={24} color="#fff" />
                        </Button>
                      </div>
                    </Col>
                  </Row> 
                  </div>
                </fieldset>
                
              </Form>
            </Card>
          </div>
        </div>
        
      </div>
    </div>
  );
}