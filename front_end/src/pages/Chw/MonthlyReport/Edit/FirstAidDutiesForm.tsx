import React from 'react';
import ChwEditFormProps from './ChwEditFormProps';
import { FormStatus, readEventValueAsNum } from '../../../../api/chws';
import { Box, Button, Form, Heading } from 'grommet';
import Spinner from '../../../../components/Spinner/Spinner';
import ChwFormField from './ChwFormField';

const FirstAidDutiesForm = (props: ChwEditFormProps) => {
  const { report, onSubmit, updateFn, formEvent } = props;

  if (formEvent.status === FormStatus.Submit) {
    return (
      <Box direction={'column'} fill>
        <Spinner size={228} />
      </Box>
    );
  }

  return (
    <Box
      direction={'column'}
      fill
      margin={{ left: 'medium' }}
      overflow={'auto'}
    >
      <Heading level={2}>Duties Performed: First Aid Performed</Heading>
      <Form onSubmit={onSubmit}>
        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large', top: 'small' }}
        >
          <ChwFormField
            label={'1 - 4: '}
            maleValue={report.report.dutiesPerformed.firstAid.oneToFour.male}
            femaleValue={
              report.report.dutiesPerformed.firstAid.oneToFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    firstAid: {
                      ...report.report.dutiesPerformed.firstAid,
                      oneToFour: {
                        ...report.report.dutiesPerformed.firstAid.oneToFour,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    firstAid: {
                      ...report.report.dutiesPerformed.firstAid,
                      oneToFour: {
                        ...report.report.dutiesPerformed.firstAid.oneToFour,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'oneToFour.male'}
            femaleFieldName={'oneToFour.female'}
          />
          <ChwFormField
            label={'5 - 9: '}
            maleValue={report.report.dutiesPerformed.firstAid.fiveToNine.male}
            femaleValue={
              report.report.dutiesPerformed.firstAid.fiveToNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    firstAid: {
                      ...report.report.dutiesPerformed.firstAid,
                      fiveToNine: {
                        ...report.report.dutiesPerformed.firstAid.fiveToNine,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    firstAid: {
                      ...report.report.dutiesPerformed.firstAid,
                      fiveToNine: {
                        ...report.report.dutiesPerformed.firstAid.fiveToNine,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'fiveToNine.male'}
            femaleFieldName={'fiveToNine.female'}
          />
          <ChwFormField
            label={'10 - 14: '}
            maleValue={
              report.report.dutiesPerformed.firstAid.tenToFourteen.male
            }
            femaleValue={
              report.report.dutiesPerformed.firstAid.tenToFourteen.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    firstAid: {
                      ...report.report.dutiesPerformed.firstAid,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed.firstAid.tenToFourteen,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    firstAid: {
                      ...report.report.dutiesPerformed.firstAid,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed.firstAid.tenToFourteen,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'tenToFourteen.male'}
            femaleFieldName={'tenToFourteen.female'}
          />
          <ChwFormField
            label={'15 - 19: '}
            maleValue={
              report.report.dutiesPerformed.firstAid.fifteenToNineteen.male
            }
            femaleValue={
              report.report.dutiesPerformed.firstAid.fifteenToNineteen.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    firstAid: {
                      ...report.report.dutiesPerformed.firstAid,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed.firstAid
                          .fifteenToNineteen,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    firstAid: {
                      ...report.report.dutiesPerformed.firstAid,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed.firstAid
                          .fifteenToNineteen,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'fifteenToNineteen.male'}
            femaleFieldName={'fifteenToNineteen.female'}
          />
        </Box>
        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large', top: 'small' }}
        >
          <ChwFormField
            label={'20 - 24: '}
            maleValue={
              report.report.dutiesPerformed.firstAid.twentyToTwentyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.firstAid.twentyToTwentyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    firstAid: {
                      ...report.report.dutiesPerformed.firstAid,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed.firstAid
                          .twentyToTwentyFour,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    firstAid: {
                      ...report.report.dutiesPerformed.firstAid,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed.firstAid
                          .twentyToTwentyFour,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'twentyToTwentyFour.male'}
            femaleFieldName={'twentyToTwentyFour.female'}
          />
          <ChwFormField
            label={'25 - 29: '}
            maleValue={
              report.report.dutiesPerformed.firstAid.twentyFiveToTwentyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.firstAid.twentyFiveToTwentyNine
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    firstAid: {
                      ...report.report.dutiesPerformed.firstAid,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed.firstAid
                          .twentyFiveToTwentyNine,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    firstAid: {
                      ...report.report.dutiesPerformed.firstAid,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed.firstAid
                          .twentyFiveToTwentyNine,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'twentyFiveToTwentyNine.male'}
            femaleFieldName={'twentyFiveToTwentyNine.female'}
          />
          <ChwFormField
            label={'30 - 34: '}
            maleValue={
              report.report.dutiesPerformed.firstAid.thirtyToThirtyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.firstAid.thirtyToThirtyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    firstAid: {
                      ...report.report.dutiesPerformed.firstAid,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed.firstAid
                          .thirtyToThirtyFour,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    firstAid: {
                      ...report.report.dutiesPerformed.firstAid,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed.firstAid
                          .thirtyToThirtyFour,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'thirtyToThirtyFour.male'}
            femaleFieldName={'thirtyToThirtyFour.female'}
          />
          <ChwFormField
            label={'35 - 39: '}
            maleValue={
              report.report.dutiesPerformed.firstAid.thirtyFiveToThirtyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.firstAid.thirtyFiveToThirtyNine
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    firstAid: {
                      ...report.report.dutiesPerformed.firstAid,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed.firstAid
                          .thirtyFiveToThirtyNine,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    firstAid: {
                      ...report.report.dutiesPerformed.firstAid,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed.firstAid
                          .thirtyFiveToThirtyNine,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'thirtyFiveToThirtyNine.male'}
            femaleFieldName={'thirtyFiveToThirtyNine.female'}
          />
        </Box>
        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large', top: 'small' }}
        >
          <ChwFormField
            label={'40 - 44: '}
            maleValue={
              report.report.dutiesPerformed.firstAid.fortyToFortyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.firstAid.fortyToFortyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    firstAid: {
                      ...report.report.dutiesPerformed.firstAid,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed.firstAid
                          .fortyToFortyFour,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    firstAid: {
                      ...report.report.dutiesPerformed.firstAid,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed.firstAid
                          .fortyToFortyFour,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'fortyToFortyFour.male'}
            femaleFieldName={'fortyToFortyFour.female'}
          />
          <ChwFormField
            label={'45 - 49: '}
            maleValue={
              report.report.dutiesPerformed.firstAid.fortyFiveToFortyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.firstAid.fortyFiveToFortyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    firstAid: {
                      ...report.report.dutiesPerformed.firstAid,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed.firstAid
                          .fortyFiveToFortyNine,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    firstAid: {
                      ...report.report.dutiesPerformed.firstAid,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed.firstAid
                          .fortyFiveToFortyNine,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'fortyFiveToFortyNine.male'}
            femaleFieldName={'fortyFiveToFortyNine.female'}
          />
          <ChwFormField
            label={'50 - 54: '}
            maleValue={
              report.report.dutiesPerformed.firstAid.fiftyToFiftyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.firstAid.fiftyToFiftyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    firstAid: {
                      ...report.report.dutiesPerformed.firstAid,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed.firstAid
                          .fiftyToFiftyFour,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    firstAid: {
                      ...report.report.dutiesPerformed.firstAid,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed.firstAid
                          .fiftyToFiftyFour,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'fiftyToFiftyFour.male'}
            femaleFieldName={'fiftyToFiftyFour.female'}
          />
          <ChwFormField
            label={'55 - 59: '}
            maleValue={
              report.report.dutiesPerformed.firstAid.fiftyFiveToFiftyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.firstAid.fiftyFiveToFiftyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    firstAid: {
                      ...report.report.dutiesPerformed.firstAid,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed.firstAid
                          .fiftyFiveToFiftyNine,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    firstAid: {
                      ...report.report.dutiesPerformed.firstAid,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed.firstAid
                          .fiftyFiveToFiftyNine,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'fiftyFiveToFiftyNine.male'}
            femaleFieldName={'fiftyFiveToFiftyNine.female'}
          />
        </Box>
        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large', top: 'small' }}
        >
          <ChwFormField
            label={'60 - 64: '}
            maleValue={
              report.report.dutiesPerformed.firstAid.sixtyToSixtyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.firstAid.sixtyToSixtyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    firstAid: {
                      ...report.report.dutiesPerformed.firstAid,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed.firstAid
                          .sixtyToSixtyFour,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    firstAid: {
                      ...report.report.dutiesPerformed.firstAid,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed.firstAid
                          .sixtyToSixtyFour,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'sixtyToSixtyFour.male'}
            femaleFieldName={'sixtyToSixtyFour.female'}
          />
          <ChwFormField
            label={'65+: '}
            maleValue={
              report.report.dutiesPerformed.firstAid.sixtyFiveOrMore.male
            }
            femaleValue={
              report.report.dutiesPerformed.firstAid.sixtyFiveOrMore.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    firstAid: {
                      ...report.report.dutiesPerformed.firstAid,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed.firstAid
                          .sixtyFiveOrMore,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    firstAid: {
                      ...report.report.dutiesPerformed.firstAid,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed.firstAid
                          .sixtyFiveOrMore,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'sixtyFiveOrMore.male'}
            femaleFieldName={'sixtyFiveOrMore.female'}
          />
        </Box>
        <Box flex align={'start'} margin={{ left: 'xxsmall', top: 'medium' }}>
          <Button type={'submit'} label={'Save'} primary />
        </Box>
      </Form>
    </Box>
  );
};

export default FirstAidDutiesForm;
