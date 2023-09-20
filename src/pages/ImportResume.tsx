import React, {useContext, useEffect, useState} from "react";
import {Divider, Upload, UploadProps} from "antd";
import GlobalContext from "../contexts/GlobalContext";
import {importPdfFromArrayBuffer, pdf2TextArray} from "../utils/pdf";
import {summarizeResume} from "../services/mh";
import Card from "@mui/material/Card";
import {LoadingButton} from "@mui/lab";
import globalStore from "../lib/GlobalData";
import {useIntl} from "react-intl";
import Rating from "@mui/material/Rating";
import LocaleContext from "../contexts/LocaleContext";


const ImportResume = () => {
    const [uploadResumeString, setUploadResume] = useState<string[] | void>();
    const {scoreValues} = useContext(GlobalContext);
    const intl = useIntl();
    const {run, score, advise, loading: scoreLoading, error} = scoreValues;
    const [summarizeLoading, setSummarizeLoading] = useState(false);
    const uploadProps: UploadProps = {
        name: 'file',
        action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
        headers: {
            authorization: 'authorization-text',
        },
        multiple: false,
        showUploadList: false,
        accept: '.pdf',
        beforeUpload: async (e) => {
            setSummarizeLoading(true);
            const buffer = await e.arrayBuffer();
            const pdf = await importPdfFromArrayBuffer(buffer);
            const pdfString = await pdf2TextArray(pdf);
            setUploadResume(pdfString)
            return false
        },
    };
    const {locale} = useContext(LocaleContext);
    const summarizeAndScore = (r: string[]) => {
        setSummarizeLoading(true);
        summarizeResume(r).then(data => {
            globalStore.save('resume-summary', JSON.stringify(data?.resume))
            run(data?.resume, locale);
        }).finally(() => {
            setSummarizeLoading(false);
        })
    }
    useEffect(() => {
        if (uploadResumeString) {
            summarizeAndScore(uploadResumeString);
        }
    }, [uploadResumeString]);
    const loading = scoreLoading || summarizeLoading;
    const getBtnText = () => {
        if (loading) {
            return 'loading'
        }
        if (score) {
            return intl.formatMessage({id: "btn.re-upload-resume"})
        }
        if (!loading && error) {
            return 'Error!Try again'
        } else if (uploadResumeString) {
            return intl.formatMessage({id: "btn.re-upload-resume"})
        } else {
            return intl.formatMessage({id: "btn.upload-resume"})
        }
    }
    return (
        <>
            <div>
                <div style={{
                    padding: '40px',
                    textAlign: 'center'
                }}>
                    <Upload {...uploadProps}>
                        <LoadingButton loading={loading} variant={"contained"} size="large">
                            {getBtnText()}
                        </LoadingButton>
                    </Upload>
                </div>
                {
                    !loading && advise?.length > 0 && (
                        <Card style={{
                            padding: 20
                        }}>
                            <div style={{
                                display: "flex",
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Rating
                                    name="simple-controlled"
                                    value={(score / 20)}
                                />
                                <h4 style={{marginLeft: 20}}>{score}</h4>
                            </div>

                            <Divider></Divider>
                            <div>{advise?.map((e, index) =>
                                <div>
                                    <span>{e}</span>
                                </div>
                            )}</div>
                        </Card>
                    )
                }
            </div>
        </>
    )
}

export default ImportResume