import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Design Patterns",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>The software engineering design framework that drives all Blueprint-powered software and projects.</>,
  },
  {
    title: "Blueprint Guidelines",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>A set of guidelines that Blueprint members follow to ensure that all projects are built with the same high-quality standards.</>,
  },
  {
    title: "Extra Resources",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>A collection of resources that Blueprint members can use to learn more about software engineering and the technologies we use.</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
